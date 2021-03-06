"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var anychart_service_1 = require('./anychart.service');
var AnymapDirective = (function () {
    function AnymapDirective(el, acService) {
        this.el = el;
        this.acService = acService;
    }
    AnymapDirective.prototype.ngOnInit = function () {
        var instance = this.acInstance || anychart[this.acType || 'map'](this.acData);
        instance.title(this.acTitle);
        instance.geoData(this.acGeoData);
        instance.title(this.acTitle);
        if (this.acLegend)
            instance.legend(this.acLegend !== 'false');
        this.acService.addChart(instance, this.acChartDraw, this.acChartId, this.el.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AnymapDirective.prototype, "acType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AnymapDirective.prototype, "acData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AnymapDirective.prototype, "acTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AnymapDirective.prototype, "acLegend", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AnymapDirective.prototype, "acInstance", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], AnymapDirective.prototype, "acChartDraw", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AnymapDirective.prototype, "acGeoData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AnymapDirective.prototype, "acChartId", void 0);
    AnymapDirective = __decorate([
        core_1.Directive({
            selector: '[anymap]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, anychart_service_1.AnychartService])
    ], AnymapDirective);
    return AnymapDirective;
}());
exports.AnymapDirective = AnymapDirective;
