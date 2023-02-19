/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";

const googleMap = document.getElementById("map") as HTMLElement;

new google.maps.Map(googleMap, {
  zoom: 2,
  center: {
    lat: 0,
    lng: 0,
  },
});
