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
import a_coruna from "../data/spain/provinces/galicia/corunya.json";
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
            return a_coruna;
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
