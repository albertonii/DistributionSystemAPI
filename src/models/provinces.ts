import madrid from "../data/spain/provinces/madrid/madrid.json";
import allMadrid from "../data/spain/provinces/madrid/all.json";
import provinces from "../data/spain/provinces/provinces.json";
import almeria from "../data/spain/provinces/andalucia/almeria.json";
import cadiz from "../data/spain/provinces/andalucia/cadiz.json";
import cordoba from "../data/spain/provinces/andalucia/cordoba.json";
import granada from "../data/spain/provinces/andalucia/granada.json";
import huelva from "../data/spain/provinces/andalucia/huelva.json";
import jaen from "../data/spain/provinces/andalucia/jaen.json";
import malaga from "../data/spain/provinces/andalucia/malaga.json";
import sevilla from "../data/spain/provinces/andalucia/sevilla.json";
import asturias from "../data/spain/provinces/asturias/asturias.json";
import huesca from "../data/spain/provinces/aragon/huesca.json";
import teruel from "../data/spain/provinces/aragon/teruel.json";
import zaragoza from "../data/spain/provinces/aragon/zaragoza.json";
import balearic_islands from "../data/spain/provinces/balearic_islands/balearic_islands.json";
import alava from "../data/spain/provinces/basque_country/alava.json";
import guipuzcoa from "../data/spain/provinces/basque_country/guipuzcoa.json";
import vizcaya from "../data/spain/provinces/basque_country/vizcaya.json";
import las_palmas from "../data/spain/provinces/canary_islands/las_palmas.json";
import santa_cruz_de_tenerife from "../data/spain/provinces/canary_islands/santa_cruz_de_tenerife.json";
import cantabria from "../data/spain/provinces/cantabria/cantabria.json";
import albacete from "../data/spain/provinces/castilla_la_mancha/albacete.json";
import ciudad_real from "../data/spain/provinces/castilla_la_mancha/ciudad_real.json";
import cuenca from "../data/spain/provinces/castilla_la_mancha/cuenca.json";
import guadalajara from "../data/spain/provinces/castilla_la_mancha/guadalajara.json";
import toledo from "../data/spain/provinces/castilla_la_mancha/toledo.json";
import avila from "../data/spain/provinces/castilla_leon/avila.json";
import burgos from "../data/spain/provinces/castilla_leon/burgos.json";
import leon from "../data/spain/provinces/castilla_leon/leon.json";
import palencia from "../data/spain/provinces/castilla_leon/palencia.json";
import salamanca from "../data/spain/provinces/castilla_leon/salamanca.json";
import segovia from "../data/spain/provinces/castilla_leon/segovia.json";
import soria from "../data/spain/provinces/castilla_leon/soria.json";
import valladolid from "../data/spain/provinces/castilla_leon/valladolid.json";
import zamora from "../data/spain/provinces/castilla_leon/zamora.json";
import barcelona from "../data/spain/provinces/catalunya/barcelona.json";
import gerona from "../data/spain/provinces/catalunya/gerona.json";
import lerida from "../data/spain/provinces/catalunya/lerida.json";
import tarragona from "../data/spain/provinces/catalunya/tarragona.json";
import ceuta from "../data/spain/provinces/ceuta/ceuta.json";
import badajoz from "../data/spain/provinces/extremadura/badajoz.json";
import caceres from "../data/spain/provinces/extremadura/caceres.json";
import corunya from "../data/spain/provinces/galicia/corunya.json";
import lugo from "../data/spain/provinces/galicia/lugo.json";
import orense from "../data/spain/provinces/galicia/orense.json";
import pontevedra from "../data/spain/provinces/galicia/pontevedra.json";
import la_rioja from "../data/spain/provinces/la_rioja/la_rioja.json";
import melilla from "../data/spain/provinces/melilla/melilla.json";
import murcia from "../data/spain/provinces/murcia/murcia.json";
import navarra from "../data/spain/provinces/navarra/navarra.json";
import valencia from "../data/spain/provinces/valencia/valencia.json";

import { Path } from "node-geometry-library/lib/SphericalUtil";
import { PolyUtil } from "node-geometry-library";
import { Community, Province } from "../lib/enums";

export class ProvinceModel {
  static getProvince = async (communityName: string, provinceName: string) => {
    switch (communityName) {
      case Community.MADRID:
        return madrid;

      case Community.ANDALUCIA: {
        switch (provinceName) {
          case Province.ALMERIA:
            return almeria;
          case Province.CADIZ:
            return cadiz;
          case Province.CORDOBA:
            return cordoba;
          case Province.GRANADA:
            return granada;
          case Province.HUELVA:
            return huelva;
          case Province.JAEN:
            return jaen;
          case Province.MALAGA:
            return malaga;
          case Province.SEVILLA:
            return sevilla;
          default:
            return {};
        }
      }

      case Community.ASTURIAS:
        return asturias;

      case Community.ARAGON: {
        switch (provinceName) {
          case Province.HUESCA:
            return huesca;
          case Province.TERUEL:
            return teruel;
          case Province.ZARAGOZA:
            return zaragoza;
          default:
            return {};
        }
      }

      case Community.BALEARIC_ISLANDS:
        return balearic_islands;

      case Community.BASQUE_COUNTRY: {
        switch (provinceName) {
          case Province.ALAVA:
            return alava;
          case Province.GUIPUZCOA:
            return guipuzcoa;
          case Province.VIZCAYA:
            return vizcaya;
          default:
            return {};
        }
      }

      case Community.CANARY_ISLANDS: {
        switch (provinceName) {
          case Province.LAS_PALMAS:
            return las_palmas;
          case Province.SANTA_CRUZ_DE_TENERIFE:
            return santa_cruz_de_tenerife;
          default:
            return {};
        }
      }
      case Community.CANTABRIA:
        return cantabria;

      case Community.CASTILLA_LA_MANCHA: {
        switch (provinceName) {
          case Province.ALBACETE:
            return albacete;
          case Province.CIUDAD_REAL:
            return ciudad_real;
          case Province.CUENCA:
            return cuenca;
          case Province.GUADALAJARA:
            return guadalajara;
          case Province.TOLEDO:
            return toledo;
          default:
            return {};
        }
      }
      case Community.CASTILLA_LEON: {
        switch (provinceName) {
          case Province.AVILA:
            return avila;
          case Province.BURGOS:
            return burgos;
          case Province.LEON:
            return leon;
          case Province.PALENCIA:
            return palencia;
          case Province.SALAMANCA:
            return salamanca;
          case Province.SEGOVIA:
            return segovia;
          case Province.SORIA:
            return soria;
          case Province.VALLADOLID:
            return valladolid;
          case Province.ZAMORA:
            return zamora;
          default:
            return {};
        }
      }
      case Community.CATALUNYA: {
        switch (provinceName) {
          case Province.BARCELONA:
            return barcelona;
          case Province.GERONA:
            return gerona;
          case Province.LERIDA:
            return lerida;
          case Province.TARRAGONA:
            return tarragona;
          default:
            return {};
        }
      }

      case Community.CEUTA:
        return ceuta;

      case Community.EXTREMADURA: {
        switch (provinceName) {
          case Province.BADAJOZ:
            return badajoz;
          case Province.CACERES:
            return caceres;
          default:
            return {};
        }
      }

      case Community.GALICIA: {
        switch (provinceName) {
          case Province.A_CORUNA:
            return corunya;
          case Province.LUGO:
            return lugo;
          case Province.ORENSE:
            return orense;
          case Province.PONTEVEDRA:
            return pontevedra;
          default:
            return {};
        }
      }

      case Community.LA_RIOJA:
        return la_rioja;

      case Community.MELILLA:
        return melilla;

      case Community.MURCIA:
        return murcia;

      case Community.NAVARRA:
        return navarra;

      case Community.VALENCIA:
        return valencia;

      default:
        return {};
    }
  };

  static getProvinces = async (communityName: string) => {
    switch (communityName) {
      case Community.MADRID:
        return allMadrid;
      default:
        return {};
    }
  };

  static isLatLngInProvince = async (
    nameCommunity: string,
    nameProvince: string,
    lat: number,
    lng: number
  ) => {
    switch (nameCommunity) {
      case Community.MADRID:
        return this.isLatLngInMadrid(lat, lng);

      case Community.ANDALUCIA: {
        switch (nameProvince) {
          case Province.ALMERIA:
            return this.isLatLngInAlmeria(lat, lng);
          case Province.CADIZ:
            return this.isLatLngInCadiz(lat, lng);
          case Province.CORDOBA:
            return this.isLatLngInCordoba(lat, lng);
          case Province.GRANADA:
            return this.isLatLngInGranada(lat, lng);
          case Province.HUELVA:
            return this.isLatLngInHuelva(lat, lng);
          case Province.JAEN:
            return this.isLatLngInJaen(lat, lng);
          case Province.MALAGA:
            return this.isLatLngInMalaga(lat, lng);
          case Province.SEVILLA:
            return this.isLatLngInSevilla(lat, lng);
          case Province.HUESCA:
            return this.isLatLngInHuesca(lat, lng);
          case Province.TERUEL:
            return this.isLatLngInTeruel(lat, lng);
          case Province.ZARAGOZA:
            return this.isLatLngInZaragoza(lat, lng);
          case Province.ASTURIAS:
            return this.isLatLngInAsturias(lat, lng);
          case Province.BALEARIC_ISLANDS:
            return this.isLatLngInBalearicIslands(lat, lng);
          case Province.ALAVA:
            return this.isLatLngInAlava(lat, lng);
          case Province.GUIPUZCOA:
            return this.isLatLngInGuipuzcoa(lat, lng);
          case Province.VIZCAYA:
            return this.isLatLngInVizcaya(lat, lng);
          case Province.LAS_PALMAS:
            return this.isLatLngInLasPalmas(lat, lng);
          case Province.SANTA_CRUZ_DE_TENERIFE:
            return this.isLatLngInSantaCruzDeTenerife(lat, lng);
          case Province.CANTABRIA:
            return this.isLatLngInCantabria(lat, lng);
          case Province.ALBACETE:
            return this.isLatLngInAlbacete(lat, lng);
          case Province.CIUDAD_REAL:
            return this.isLatLngInCiudadReal(lat, lng);
          case Province.CUENCA:
            return this.isLatLngInCuenca(lat, lng);
          case Province.GUADALAJARA:
            return this.isLatLngInGuadalajara(lat, lng);
          case Province.TOLEDO:
            return this.isLatLngInToledo(lat, lng);
          case Province.AVILA:
            return this.isLatLngInAvila(lat, lng);
          case Province.BURGOS:
            return this.isLatLngInBurgos(lat, lng);
          case Province.LEON:
            return this.isLatLngInLeon(lat, lng);
          case Province.PALENCIA:
            return this.isLatLngInPalencia(lat, lng);
          case Province.SALAMANCA:
            return this.isLatLngInSalamanca(lat, lng);
          case Province.SEGOVIA:
            return this.isLatLngInSegovia(lat, lng);
          case Province.SORIA:
            return this.isLatLngInSoria(lat, lng);
          case Province.VALLADOLID:
            return this.isLatLngInValladolid(lat, lng);
          case Province.ZAMORA:
            return this.isLatLngInZamora(lat, lng);
          case Province.BARCELONA:
            return this.isLatLngInBarcelona(lat, lng);
          case Province.GERONA:
            return this.isLatLngInGerona(lat, lng);
          case Province.LERIDA:
            return this.isLatLngInLerida(lat, lng);
          case Province.TARRAGONA:
            return this.isLatLngInTarragona(lat, lng);
          case Province.CEUTA:
            return this.isLatLngInCeuta(lat, lng);
          case Province.BADAJOZ:
            return this.isLatLngInBadajoz(lat, lng);
          case Province.CACERES:
            return this.isLatLngInCaceres(lat, lng);
          case Province.A_CORUNA:
            return this.isLatLngInCorunya(lat, lng);
          case Province.LUGO:
            return this.isLatLngInLugo(lat, lng);
          case Province.ORENSE:
            return this.isLatLngInOrense(lat, lng);
          case Province.PONTEVEDRA:
            return this.isLatLngInPontevedra(lat, lng);
          case Province.LA_RIOJA:
            return this.isLatLngInLaRioja(lat, lng);
          case Province.MADRID:
            return this.isLatLngInMadrid(lat, lng);
          case Province.MELILLA:
            return this.isLatLngInMelilla(lat, lng);
          case Province.MURCIA:
            return this.isLatLngInMurcia(lat, lng);
          case Province.NAVARRA:
            return this.isLatLngInNavarra(lat, lng);
          case Province.VALENCIA:
            return this.isLatLngInValencia(lat, lng);

          default:
            return false;
        }
      }

      case Community.ASTURIAS:
        return this.isLatLngInAsturias(lat, lng);

      case Community.ARAGON: {
        switch (nameProvince) {
          case Province.HUESCA:
            return this.isLatLngInHuesca(lat, lng);
          case Province.TERUEL:
            return this.isLatLngInTeruel(lat, lng);
          case Province.ZARAGOZA:
            return this.isLatLngInZaragoza(lat, lng);
          default:
            return false;
        }
      }
      //   case "balearic_islands":
      //     return this.isLatLngInBalearicIslands(lat, lng);
      //   case "basque_country":
      //     return this.isLatLngInBasqueCountry(lat, lng);
      //   case "canary_islands":
      //     return this.isLatLngInCanaryIsland(lat, lng);
      //   case "cantabria":
      //     return this.isLatLngInCantabria(lat, lng);
      //   case "castilla_la_mancha":
      //     return this.isLatLngInCastillaLaMancha(lat, lng);
      //   case "castilla_leon":
      //     return this.isLatLngInCastillaLon(lat, lng);
      //   case "catalunya":
      //     return this.isLatLngInCatalunya(lat, lng);
      //   case "ceuta":
      //     return this.isLatLngInCeuta(lat, lng);
      //   case "extremadura":
      //     return this.isLatLngInExtremadura(lat, lng);
      //   case "galicia":
      //     return this.isLatLngInGalicia(lat, lng);
      //   case "la_rioja":
      //     return this.isLatLngInLaRioja(lat, lng);
      //   case "melilla":
      //     return this.isLatLngInMelilla(lat, lng);
      //   case "murcia":
      //     return this.isLatLngInMurcia(lat, lng);
      case Community.NAVARRA:
        return this.isLatLngInNavarra(lat, lng);
      //   case "valencia":
      //     return this.isLatLngInValencia(lat, lng);

      default:
        return false;
    }
  };

  /**
   * Polygon is Almería
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAlmeria = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < almeria.features.length; i++) {
      const geometryType = almeria.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < almeria.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = almeria.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Cádiz
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCadiz = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < cadiz.features.length; i++) {
      const geometryType = cadiz.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < cadiz.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = cadiz.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Córdoba
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCordoba = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < cordoba.features.length; i++) {
      const geometryType = cordoba.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < cordoba.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = cordoba.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Granada
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInGranada = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < granada.features.length; i++) {
      const geometryType = granada.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < granada.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = granada.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Huelva
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInHuelva = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < huelva.features.length; i++) {
      const geometryType = huelva.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < huelva.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = huelva.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Jaén
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInJaen = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < jaen.features.length; i++) {
      const geometryType = jaen.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (let j = 0; j < jaen.features[i].geometry.coordinates.length; j++) {
          const polygon: number[][] = jaen.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Málaga
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInMalaga = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < malaga.features.length; i++) {
      const geometryType = malaga.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < malaga.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = malaga.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Sevilla
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInSevilla = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < sevilla.features.length; i++) {
      const geometryType = sevilla.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < sevilla.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = sevilla.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Huesca
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInHuesca = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < huesca.features.length; i++) {
      const geometryType = huesca.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < huesca.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = huesca.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Teruel
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInTeruel = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < teruel.features.length; i++) {
      const geometryType = teruel.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < teruel.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = teruel.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Zaragoza
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInZaragoza = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < zaragoza.features.length; i++) {
      const geometryType = zaragoza.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < zaragoza.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = zaragoza.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Asturias
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAsturias = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < asturias.features.length; i++) {
      const geometryType = asturias.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < asturias.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = asturias.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Balearic Islands
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInBalearicIslands = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < balearic_islands.features.length; i++) {
      const geometryType = balearic_islands.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < balearic_islands.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = balearic_islands.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Alava
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAlava = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < alava.features.length; i++) {
      const geometryType = alava.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < alava.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = alava.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Guipuzcoa
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInGuipuzcoa = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < guipuzcoa.features.length; i++) {
      const geometryType = guipuzcoa.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < guipuzcoa.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = guipuzcoa.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Vizcaya
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInVizcaya = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < vizcaya.features.length; i++) {
      const geometryType = vizcaya.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < vizcaya.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = vizcaya.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Las Palmas
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInLasPalmas = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < las_palmas.features.length; i++) {
      const geometryType = las_palmas.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < las_palmas.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = las_palmas.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Santa Cruz de Tenerife
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInSantaCruzDeTenerife = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < santa_cruz_de_tenerife.features.length; i++) {
      const geometryType = santa_cruz_de_tenerife.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < santa_cruz_de_tenerife.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = santa_cruz_de_tenerife.features[i]
            .geometry.coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Cantabria
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCantabria = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < cantabria.features.length; i++) {
      const geometryType = cantabria.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < cantabria.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = cantabria.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Albacete
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAlbacete = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < albacete.features.length; i++) {
      const geometryType = albacete.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < albacete.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = albacete.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Ciudad Real
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCiudadReal = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < ciudad_real.features.length; i++) {
      const geometryType = ciudad_real.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < ciudad_real.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = ciudad_real.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Cuenca
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCuenca = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < cuenca.features.length; i++) {
      const geometryType = cuenca.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < cuenca.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = cuenca.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Guadalajara
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInGuadalajara = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < guadalajara.features.length; i++) {
      const geometryType = guadalajara.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < guadalajara.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = guadalajara.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Toledo
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInToledo = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < toledo.features.length; i++) {
      const geometryType = toledo.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < toledo.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = toledo.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Avila
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInAvila = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < avila.features.length; i++) {
      const geometryType = avila.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < avila.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = avila.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Burgos
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInBurgos = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < burgos.features.length; i++) {
      const geometryType = burgos.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < burgos.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = burgos.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Leon
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInLeon = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < leon.features.length; i++) {
      const geometryType = leon.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (let j = 0; j < leon.features[i].geometry.coordinates.length; j++) {
          const polygon: number[][] = leon.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Palencia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInPalencia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < palencia.features.length; i++) {
      const geometryType = palencia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < palencia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = palencia.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Salamanca
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInSalamanca = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < salamanca.features.length; i++) {
      const geometryType = salamanca.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < salamanca.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = salamanca.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Segovia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInSegovia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < segovia.features.length; i++) {
      const geometryType = segovia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < segovia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = segovia.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Soria
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInSoria = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < soria.features.length; i++) {
      const geometryType = soria.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < soria.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = soria.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Valladolid
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInValladolid = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < valladolid.features.length; i++) {
      const geometryType = valladolid.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < valladolid.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = valladolid.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Zamora
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInZamora = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < zamora.features.length; i++) {
      const geometryType = zamora.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < zamora.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = zamora.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Barcelona
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInBarcelona = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < barcelona.features.length; i++) {
      const geometryType = barcelona.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < barcelona.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = barcelona.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Gerona
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInGerona = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < gerona.features.length; i++) {
      const geometryType = gerona.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < gerona.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = gerona.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Lerida
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInLerida = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < lerida.features.length; i++) {
      const geometryType = lerida.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < lerida.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = lerida.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Tarragona
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInTarragona = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < tarragona.features.length; i++) {
      const geometryType = tarragona.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < tarragona.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = tarragona.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Ceuta
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCeuta = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < ceuta.features.length; i++) {
      const geometryType = ceuta.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < ceuta.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = ceuta.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Badajoz
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInBadajoz = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < badajoz.features.length; i++) {
      const geometryType = badajoz.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < badajoz.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = badajoz.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Caceres
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCaceres = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < caceres.features.length; i++) {
      const geometryType = caceres.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < caceres.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = caceres.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Corunya
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInCorunya = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < corunya.features.length; i++) {
      const geometryType = corunya.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < corunya.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = corunya.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Lugo
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInLugo = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < lugo.features.length; i++) {
      const geometryType = lugo.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (let j = 0; j < lugo.features[i].geometry.coordinates.length; j++) {
          const polygon: number[][] = lugo.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Orense
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInOrense = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < orense.features.length; i++) {
      const geometryType = orense.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < orense.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = orense.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Pontevedra
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInPontevedra = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < pontevedra.features.length; i++) {
      const geometryType = pontevedra.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < pontevedra.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = pontevedra.features[i].geometry
            .coordinates[j][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is La Rioja
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInLaRioja = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < la_rioja.features.length; i++) {
      const geometryType = la_rioja.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < la_rioja.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = la_rioja.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Madrid
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInMadrid = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < madrid.features.length; i++) {
      const geometryType = madrid.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < madrid.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = madrid.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Melilla
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInMelilla = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < melilla.features.length; i++) {
      const geometryType = melilla.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < melilla.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = melilla.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Murcia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInMurcia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < murcia.features.length; i++) {
      const geometryType = murcia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < murcia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = murcia.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Navarra
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInNavarra = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < navarra.features.length; i++) {
      const geometryType = navarra.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < navarra.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = navarra.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   * Polygon is Valencia
   * MultiPolygon
   * @param lat
   * @param lng
   * @returns
   */
  static isLatLngInValencia = (lat: number, lng: number) => {
    let isInside = false;

    for (let i = 0; i < valencia.features.length; i++) {
      const geometryType = valencia.features[i].geometry.type;

      if (geometryType === "MultiPolygon") {
        for (
          let j = 0;
          j < valencia.features[i].geometry.coordinates.length;
          j++
        ) {
          const polygon: number[][] = valencia.features[i].geometry.coordinates[
            j
          ][0] as number[][];

          const path = this.convertPolygonToPath(polygon);
          isInside = ProvinceModel.inside(lat, lng, path);
          if (isInside) {
            return isInside;
          }
        }
      }
    }

    return isInside;
  };

  /**
   *
   * @param coordinates Coordinates is a GeoJSON format.
   * @example
   * const coordinates =
   * [
   *    [
   *      [latitude, longitude],
   *      [latitude, longitude],
   *      [latitude, longitude]
   *    ],
   * ]
   * @returns
   */
  static convertPolygonToPath = (coordinates: number[][]) => {
    if (!Array.isArray(coordinates)) {
      throw new TypeError("Invalid coordinates. Array with locations expected");
    }

    const path: Path[] = coordinates.map((coordinate) => {
      return { lat: coordinate[0], lng: coordinate[1] };
    });

    return path;
  };

  static inside = (latitude: number, longitude: number, polygon: Path[]) => {
    const isInside = PolyUtil.containsLocation(
      { lat: latitude, lng: longitude },
      polygon
    );
    return isInside;
  };
}
