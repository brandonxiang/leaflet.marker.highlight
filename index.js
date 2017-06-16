L.Marker.include({
    _initIcon: function() {
        this._initIconOrigin();

        var light = this._light = L.DivIcon.prototype.createIcon();
        L.DomUtil.addClass(light, "light");
        L.DomUtil.create('span', 'glow', light);
        L.DomUtil.create('span', 'flare', light);
        if (this.options.highlight === "permanent") {
            L.DomUtil.addClass(light, "permanent");
        } else if (this.options.highlight === "temporary") {
            L.DomUtil.addClass(light, "temporary");
        }
        this.getPane().appendChild(light);
        this.on('remove', function(){
            light.remove();
        })
    },

    _setPos: function(pos) {
        this._setPosOrigin(pos)
        L.DomUtil.setPosition(this._light, pos);
    },

    enableTemporaryHighlight: function() {
        this.options.highlight = "temporary";
        L.DomUtil.addClass(this._light, "temporary");
    },

    disableTemporaryHighlight: function(value) {
        delete this.options.highlight;
        L.DomUtil.removeClass(this._light, "temporary")
    },

    enablePermanentHighlight: function() {
        this.options.highlight = "permanent";
        L.DomUtil.addClass(this._light, "permanent");
    },

    disablePermanentHighlight: function(value) {
        delete this.options.highlight;
        L.DomUtil.removeClass(this._light, "permanent")
    },

    _initIconOrigin: function() {
        //The same as _ininIcon
        var options = this.options,
            classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

        var icon = options.icon.createIcon(this._icon),
            addIcon = false;

        // if we're not reusing the icon, remove the old one and init new one
        if (icon !== this._icon) {
            if (this._icon) {
                this._removeIcon();
            }
            addIcon = true;

            if (options.title) {
                icon.title = options.title;
            }
            if (options.alt) {
                icon.alt = options.alt;
            }
        }

        L.DomUtil.addClass(icon, classToAdd);

        if (options.keyboard) {
            icon.tabIndex = '0';
        }

        this._icon = icon;

        if (options.riseOnHover) {
            this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
        }

        var newShadow = options.icon.createShadow(this._shadow),
            addShadow = false;

        if (newShadow !== this._shadow) {
            this._removeShadow();
            addShadow = true;
        }

        if (newShadow) {
            L.DomUtil.addClass(newShadow, classToAdd);
        }
        this._shadow = newShadow;


        if (options.opacity < 1) {
            this._updateOpacity();
        }


        if (addIcon) {
            this.getPane().appendChild(this._icon);
        }
        this._initInteraction();
        if (newShadow && addShadow) {
            this.getPane('shadowPane').appendChild(this._shadow);
        }
    },

    _setPosOrigin: function(pos) {
        L.DomUtil.setPosition(this._icon, pos);

        if (this._shadow) {
            L.DomUtil.setPosition(this._shadow, pos);
        }

        this._zIndex = pos.y + this.options.zIndexOffset;

        this._resetZIndex();
    }
})
