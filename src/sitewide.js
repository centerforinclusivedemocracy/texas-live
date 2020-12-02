// the list of counties which are participating in this siting tool
// countyfp (three-digit FIPS code) is used to link to a GeoJSON entry nmap behaviors
// see also getParticipatingCountyInfo() for a handy-dandy wrapper to fetch one of these county entries by countyfp
//
// datafootnote = optional footnote which will be added to map legend popups for that county
// outoforder = optional message to display in top-left of county page, indicating that this county data are questionable
// exceptlayers = skip these layers when loading the data profile, for counties to opt-out from individual layers
const PARTICIPATING_COUNTIES = [
    { countyfp: "001", name: "Anderson", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "005", name: "Angelina", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "021", name: "Bastrop", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "027", name: "Bell", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "029", name: "Bexar", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "037", name: "Bowie", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "039", name: "Brazoria", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "041", name: "Brazos", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "061", name: "Cameron", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "073", name: "Cherokee", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "085", name: "Collin", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "091", name: "Comal", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "099", name: "Coryell", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "113", name: "Dallas", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "121", name: "Denton", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "135", name: "Ector", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "139", name: "Ellis", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "141", name: "El Paso", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "157", name: "Fort Bend", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "167", name: "Galveston", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "181", name: "Grayson", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "183", name: "Gregg", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "187", name: "Guadalupe", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "199", name: "Hardin", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "201", name: "Harris", profile: 'harris', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "203", name: "Harrison", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "209", name: "Hays", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "213", name: "Henderson", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "215", name: "Hidalgo", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "221", name: "Hood", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "231", name: "Hunt", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "245", name: "Jefferson", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "251", name: "Johnson", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "257", name: "Kauffman", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "291", name: "Liberty", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "303", name: "Lubbock", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "309", name: "McLennan", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "323", name: "Maverick", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "329", name: "Midland", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "339", name: "Montgomery", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "347", name: "Nacogdoches", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "355", name: "Nueces", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "361", name: "Orange", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "367", name: "Parker", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "375", name: "Potter", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "381", name: "Randall", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "397", name: "Rockwall", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "401", name: "Rusk", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "409", name: "San Patricio", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "423", name: "Smith", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "427", name: "Starr", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "439", name: "Tarrant", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "441", name: "Taylor", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "451", name: "Tom Green", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "453", name: "Travis", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "467", name: "Van Zandt", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "469", name: "Victoria", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "471", name: "Walker", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "479", name: "Webb", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "485", name: "Wichita", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "491", name: "Williamson", profile: 'fullmodel', outoforder:"", datafootnote:"", exceptlayers: []  },
    { countyfp: "497", name: "Wise", profile: 'fullmodelCID', outoforder:"", datafootnote:"", exceptlayers: []  },
];

const getParticipatingCountyInfo = function (countyfp) {
    // fetch the county entry, easy; be sure to take a copy because we're about to mutate it
    const entry = PARTICIPATING_COUNTIES.filter(function (c) { return c.countyfp == countyfp; })[0];
    if (! entry) throw new Error(`No county with countyfp = ${countyfp}`);
    if (! DATA_PROFILES[entry.profile]) throw new Error(`County ${countyfp} has invalid profile ${entry.profile}`);

    // add the data profile information (notably layers) for the county
    // then remove any layers where this county is specifically opted-out
    const returnme = Object.assign({}, entry);

    returnme.datalayers = Object.assign({}, DATA_PROFILES[entry.profile]);

    if (returnme.exceptlayers && returnme.exceptlayers.length) {
        returnme.datalayers.suggestedareas = returnme.datalayers.suggestedareas.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
        returnme.datalayers.additionalareas = returnme.datalayers.additionalareas.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
        returnme.datalayers.pointsofinterest = returnme.datalayers.pointsofinterest.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
        returnme.datalayers.sitingcriteria = returnme.datalayers.sitingcriteria.filter(function (layerinfo) {
            return returnme.exceptlayers.indexOf(layerinfo.id) === -1;
        });
    }

    //
    // county-specific data hacks
    //

    // TX 201 (Harris) add this custom dataset
    if (countyfp == '201') {
        returnme.datalayers.pointsofinterest.splice(1, 0, DATA_LAYERS.supervisorydistricts201);
    }

    // polling place data X3, some counties have 0 of these, those, and the other
    // customize which ones are offered per county, so we don't offer a bunch of Polling Place layers with 0 content
    const haspoll_democrat = [
        '001','005','037','061','073',
        '121','199',
        '203','231','251','291',
        '323','347','361',
        '427','467','471','497',
    ];
    const haspoll_republican = [
        '001','005','037','061','073',
        '121','199',
        '203','231','251','291',
        '323','347','361',
        '427','467','471','497',
    ];
    const haspoll_joint = [
        '021','027','029','039','041','091','085','099',
        '113','135','139','141','157','167','181','183','187',
        '209','213','215','221','245','257',
        '303','309','329','339','355','367','375','381','397',
        '401','409','453','423','439','441','451','485','479','491',
    ];

    if (haspoll_democrat.indexOf(countyfp) == -1) {
        returnme.datalayers.pointsofinterest = returnme.datalayers.pointsofinterest.filter(function (layerinfo) { return layerinfo.id != 'pripoll2020democrat'; });
    }
    if (haspoll_republican.indexOf(countyfp) == -1) {
        returnme.datalayers.pointsofinterest = returnme.datalayers.pointsofinterest.filter(function (layerinfo) { return layerinfo.id != 'pripoll2020republican'; });
    }
    if (haspoll_joint.indexOf(countyfp) == -1) {
        returnme.datalayers.pointsofinterest = returnme.datalayers.pointsofinterest.filter(function (layerinfo) { return layerinfo.id != 'pripoll2020joint'; });
    }

    // done
    return returnme;
};

// the style for drawing counties onto the statewide overview map,
// with different styles for participating counties vs non-participiating, and the different data profiles
const BOUNDSTYLE_DEFAULT = { fillColor: 'white', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.5 };
const BOUNDSTYLE_PARTICIPATING = { fillColor: '#fecd1b', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.5 };
const BOUNDSTYLE_FULL = { fillColor: '#fecd1b', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.75 };
const BOUNDSTYLE_LITE = { fillColor: '#fecd1b', weight: 1, opacity: 0.5, color: 'black', fillOpacity: 0.33 };
const BOUNDSTYLE_MOUSEOVER = { weight: 5, color: 'black', fillOpacity: 0.15 };

// in county.html to view a single county, the style to use for county boundary
const SINGLECOUNTY_STYLE = { fill: false, weight: 2, opacity: 1, color: 'black' };

// for individual tracts in county view, the base style
const CENSUSTRACT_STYLE = { color: 'black', weight: 1, opacity: 0.25, fillColor: 'transparent', fillOpacity: 0.8, interactive: false };

// for the squares indicating a tract with unreliable data, the style
const UNRELIABLE_STYLE = { color: 'black', fillColor: 'black', fillOpacity: 0.8, stroke: false, interactive: false };

// to highlight a suggested area circle when its deails are being shown
const HIGHLIGHT_SUGGESTED_AREA = { color: 'yellow', weight: 2, fill: false };

// for circles & tracts with no data, a grey fill
const NODATA_COLOR = '#CCCCCC';

// a list of basemap options for the BasemapBar
const BASEMAP_OPTIONS = [
    {
        type: 'xyz',
        label: 'Map',
        url: 'https://api.mapbox.com/styles/v1/scottstetkiewicz/ckfn0guxg50bg19lv2rdg6k6l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2NvdHRzdGV0a2lld2ljeiIsImEiOiJja2ZtdWhmd2wxZ2sxMnptajZ0OHo4MXNsIn0.bisTYuQf8wxsaAbuhWeJew',
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    },
    /*
    {
        type: 'xyz',
        label: 'Map',
        url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attribution: 'Map tiles by <a target="_blank" href="http://www.mapbox.com">MapBox</a>.<br />Data &copy; <a target="_blank" href="http://openstreetmap.org/copyright" target="_blank">OpenStreetMap contributings</a>',
    },
    */
    {
        type: 'xyz',
        label: 'Satellite',
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    },
];

// these color ramps will be used by several layers, which will be defined in DATA_PROFILES
const SCORING_COLOR_RAMP = [ '#f1eef6', '#d7b5d8', '#df65b0', '#dd1c77', '#980043' ];
const CRITERIA_COLOR_RAMP = [ '#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494' ];

// list of site-scoring criteria from all_sites_scored.csv
// we loop over this to calculate stats in a few places, and it's also useful to have it here for documentation
const SITE_SCORING_FIELDS = [
    'dens.cvap.std',  // County Percentage of Voting Age Citizens
    'dens.work.std',  // County Worker Percentage
    'popDens.std',  // Population Density
    'prc.CarAccess.std',  // Percent of Population with Vehicle Access
    'prc.ElNonReg.std',  // Eligible Non-Registered Voter Rate
    'prc.disabled.std',  // Percent Disabled Population
    'prc.latino.std',  // Percent Latino Population
    'prc.nonEngProf.std',  // Percent Limited English Proficient Population
    'prc.pov.std',  // Percent of the Population in Poverty
    'prc.youth.std',  // Percent of Population Youth
    'rate.vbm.std',  // Vote by Mail Rate (Total)
    'dens.poll.std',  // Polling Place Voter Percentage
];


// profiles are what layers to offer for each county, since not all counties get all processing
// define the set of DATA_LAYERS that exist in the universe,
// then DATA_PROFILES which are sets of layers to offer to each county
//
// circle = for circle markers (point CSVs) a L.Path style for the circle, including a radius (meters)
// mapzindex  = for circle markers (point CSVs) their stacking order: low (default), medium, high, highest
// popupnamefield = for the popup when clicking circle markers (point CSVs) which CSV field to use as the name; undefined = no popup
// popuptypefield = for the popup when clicking circle markers (point CSVs) which CSV field to use as the type; may use popuptypetext instead
// popuptypetext = for the popup when clicking circle markers (point CSVs) a fixed string to display as the type; may use popuptypefield to read from CSV
// radiogroup = layers matching the same radiogroup will behave similarly to radio buttons: turning on one will turn off others in this same group
const DATA_LAYERS = {};

DATA_LAYERS.election_day_sites = {
    id: 'election_day_sites',
    title: "Suggested Areas for Election Day Vote Centers",
    csvfile: 'model_files/election_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/election_day_sites_shp.zip',
};
DATA_LAYERS.election_day_sitesCID = {
    id: 'election_day_sites',
    title: "Suggested Areas for Election Day Voting Locations",
    csvfile: 'model_files/election_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/election_day_sites_shp.zip',
};
DATA_LAYERS.early_voting_day_sites = {
    id: 'early_voting_day_sites',
    title: "Suggested Areas for Early Vote Centers",
    csvfile: 'model_files/early_voting_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/early_voting_day_sites_shp.zip',
};
DATA_LAYERS.early_voting_day_sitesCID = {
    id: 'early_voting_day_sites',
    title: "Suggested Areas for Early Voting Locations",
    csvfile: 'model_files/early_voting_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/early_voting_day_sites_shp.zip',
};
// SS: No dropbox in TX
// DATA_LAYERS.dropbox_sites = {
//     id: 'dropbox_sites',
//     title: "Suggested Areas for Ballot Drop Boxes",
//     csvfile: 'model_files/dropbox_sites.csv',
//     circle: { radius: 400, opacity: 0.8, color: 'red', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
//     quantilefield: 'droppoff_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
//     mapzindex: 'high',
//     legendformat: 'lowtohigh',
//     downloadfile: 'model_files/dropbox_sites_shp.zip',
// };
DATA_LAYERS.all_sites_scored = {
    id: 'all_sites_scored',
    title: "All Potential Areas",
    csvfile: 'model_files/all_sites_scored.csv',
    circle: { radius: 400, opacity: 0.8, color: '#fcc5c0', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/all_sites_scored_shp.zip',
};
DATA_LAYERS.additional_sites_model = {
    id: 'additional_sites_model',
    title: "Additional Vote Center Options Based on Model",
    csvfile: 'model_files/additional_sites_model.csv',
    circle: { radius: 400, opacity: 0.8, color: 'blue', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'medium',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/additional_sites_model_shp.zip',
};
DATA_LAYERS.additional_sites_modelCID = {
    id: 'additional_sites_model',
    title: "Additional Voting Location Options Based on Model",
    csvfile: 'model_files/additional_sites_model.csv',
    circle: { radius: 400, opacity: 0.8, color: 'blue', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'medium',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/additional_sites_model_shp.zip',
};
// SS: None for Harris
// DATA_LAYERS.additional_sites_distance = {
//     id: 'additional_sites_distance',
//     title: "Additional Suggested Areas Based on Distance",
//     csvfile: 'model_files/additional_sites_distance.csv',
//     circle: { radius: 400, opacity: 0.8, color: 'blue', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
//     quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
//     mapzindex: 'medium',
//     legendformat: 'lowtohigh',
//     downloadfile: '',
// };
DATA_LAYERS.pripoll2020republican = {
    id: 'pripoll2020republican',
    title: "2020 Presidential Primary Polling Place Locations, Republican",
    csvfile: 'point_files/tx_pollingplaces_2020_republican.csv',
    circle: { radius: 10, color: 'black', fillColor: 'gray', fillOpacity: 0.6, opacity: 0.6, },
    popupnamefield: 'name',
    popuptypetext: '2020 Presidential Primary Polling Place Location, Republican',
    downloadfile: 'point_files/tx_pollingplaces_2020_republican.csv',
};
DATA_LAYERS.pripoll2020democrat = {
    id: 'pripoll2020democrat',
    title: "2020 Presidential Primary Polling Place Locations, Democratic",
    csvfile: 'point_files/tx_pollingplaces_2020_democratic.csv',
    circle: { radius: 10, color: 'black', fillColor: 'gray', fillOpacity: 0.6, opacity: 0.6, },
    popupnamefield: 'name',
    popuptypetext: '2020 Presidential Primary Polling Place Location, Democratic',
    downloadfile: 'point_files/tx_pollingplaces_2020_democratic.csv',
};
DATA_LAYERS.pripoll2020joint = {
    id: 'pripoll2020joint',
    title: "2020 Presidential Primary Polling Place Locations, Joint",
    csvfile: 'point_files/tx_pollingplaces_2020_joint.csv',
    circle: { radius: 10, color: 'black', fillColor: 'gray', fillOpacity: 0.6, opacity: 0.6, },
    popupnamefield: 'name',
    popuptypetext: '2020 Presidential Primary Polling Place Location, Joint',
    downloadfile: 'point_files/tx_pollingplaces_2020_joint.csv',
};
DATA_LAYERS.pricenter2020 = {
    id: 'pricenter2020',
    title: "2020 Presidential Primary Vote Center Locations",
    csvfile: 'point_files/primary_votecenters_2020.csv',
    circle: { radius: 10, color: 'black', fillColor: 'gray', fillOpacity: 0.6, opacity: 0.6, },
    popupnamefield: 'name',
    popuptypetext: '2020 Primary Vote Center Location',
    downloadfile: 'point_files/primary_votecenters_2020.csv',
};
DATA_LAYERS.transit_stops = {
    id: 'transit_stops',
    title: "Transit Stops",
    csvfile: 'point_files/transit_stops_latlononly.csv',
    circle: { color: 'darkred', fillColor: 'darkred', fillOpacity: 0.6, radius: 10, opacity: 0.6, },
    downloadfile: 'point_files/transit_stops.csv',
};
DATA_LAYERS.cvapdens = {
    id: 'cvapdens',
    title: "County Percentage of Voting Age Citizens",
    scoresource: 'indicatordata', scorefield:  'cvapdens',
    quantilefield: 'cvapdens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.job_dens = {
    id: 'job_dens',
    title: "County Worker Percentage",
    scoresource: 'indicatordata', scorefield:  'job_dens',
    quantilefield: 'job_dens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.tot_elignonreg_prc = {
    id: 'tot_elignonreg_prc',
    title: "Eligible Non-Registered Voter Rate",
    scoresource: 'indicatordata', scorefield:  'tot_elignonreg_prc_final',
    quantilefield: 'tot_elignonreg_prc_final' , quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prcdisabled = {
    id: 'prcdisabled',
    title: "Percent Disabled Population",
    scoresource: 'indicatordata', scorefield:  'prcdisabled_final',
    quantilefield: 'prcdisabled_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_nonengprof = {
    id: 'prc_nonengprof',
    title: "Percent Limited English Proficient Population",
    scoresource: 'indicatordata', scorefield:  'prc_nonengprof_final',
    quantilefield: 'prc_nonengprof_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_caraccess_final = {
    id: 'prc_caraccess_final',
    title: "Percent of Population with Vehicle Access",
    scoresource: 'indicatordata', scorefield:  'prc_caraccess_final',
    quantilefield: 'prc_caraccess_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_pov_final = {
    id: 'prc_pov_final',
    title: "Percent of the Population in Poverty",
    scoresource: 'indicatordata', scorefield:  'prc_pov_final',
    quantilefield: 'prc_pov_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_youth_final = {
    id: 'prc_youth_final',
    title: "Percent of the Population Youth",
    scoresource: 'indicatordata', scorefield:  'prc_youth_final',
    quantilefield: 'prc_youth_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.pollvoter_dens = {
    id: 'pollvoter_dens',
    title: "Polling Place Voter Percentage",
    scoresource: 'indicatordata', scorefield:  'pollvoter_dens',
    quantilefield: 'pollvoter_dens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.popdens = {
    id: 'popdens',
    title: "Population Density (per sq km)",
    scoresource: 'indicatordata', scorefield:  'popdens',
    quantilefield: 'popdens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'integer',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_tot = {
    id: 'vbm_rate_tot',
    title: "2016 Vote by Mail Rate (Total)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_tot',
    quantilefield: 'vbm_rate_tot', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_asn = {
    id: 'vbm_rate_asn',
    title: "2016 Vote by Mail Rate (Asian-American)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_asn',
    quantilefield: 'vbm_rate_asn', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_lat = {
    id: 'vbm_rate_lat',
    title: "2016 Vote by Mail Rate (Latino)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_lat',
    quantilefield: 'vbm_rate_lat', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.vbm_rate_youth = {
    id: 'vbm_rate_youth',
    title: "2016 Vote by Mail Rate (Youth)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_youth',
    quantilefield: 'vbm_rate_youth', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_black = {
    id: 'prc_black',
    title: "Percent African-American Population",
    scoresource: 'indicatordata', scorefield: 'prc_black',
    quantilefield: 'prc_black', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_asian = {
    id: 'prc_asian',
    title: "Percent Asian-American Population",
    scoresource: 'indicatordata', scorefield: 'prc_asian',
    quantilefield: 'prc_asian', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_latino = {
    id: 'prc_latino',
    title: "Percent Latino Population",
    scoresource: 'indicatordata', scorefield: 'prc_latino',
    quantilefield: 'prc_latino', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_white = {
    id: 'prc_white',
    title: "Percent White Population",
    scoresource: 'indicatordata', scorefield: 'prc_white',
    quantilefield: 'prc_white', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.poi_govish = {
    id: 'poi_govish',
    title: "Points of Interest (Government)",
    csvfile: 'point_files/poi_govish.csv',
    circle: { radius: 35, color: 'red', fillColor: 'darkorange', fillOpacity: 0.45, opacity: 0.5, },
    popupnamefield: 'name',
    popuptypefield: 'fclass',
    mapzindex: 'highest',
    downloadfile: 'point_files/poi_govish.csv',
};
DATA_LAYERS.poi_misc = {
    id: 'poi_misc',
    title: "Points of Interest (Non-Government)",
    csvfile: 'point_files/poi_misc.csv',
    circle: { radius: 35, color: 'darkred', fillColor: 'darkred', fillOpacity: 0.45, opacity: 0.5, },
    popupnamefield: 'name',
    popuptypefield: 'fclass',
    mapzindex: 'highest',
    downloadfile: 'point_files/poi_misc.csv',
};
DATA_LAYERS.poi = {
    id: 'poi',
    title: "Points of Interest (All)",
    csvfile: 'point_files/poi.csv',
    circle: { radius: 35, color: 'black', fillColor: 'gray', fillOpacity: 0.45, opacity: 0.5, },
    popupnamefield: 'name',
    popuptypefield: 'fclass',
    mapzindex: 'highest',
    downloadfile: 'point_files/poi.csv',
};

// custom datasets for specific counties
DATA_LAYERS.supervisorydistricts201 = {
    id: 'supervisorydistricts201',
    title: "Supervisory Districts",
    customgeojsonfile: 'HarrisSupervisoryDistricts.json',
    downloadfile: 'HarrisSupervisoryDistrictsGeoJSON.zip',
    style: { fill: false, color: 'black', weight: 1, interactive: false },
};

// and now the data profiles, which are collections of DATA_LAYERS to offer to each county
// full model = all of the layers
// lite = all layers EXCEPT suggested areas
const DATA_PROFILES = {};

DATA_PROFILES.fullmodel = {
    suggestedareas: [
        DATA_LAYERS.election_day_sites, DATA_LAYERS.early_voting_day_sites, DATA_LAYERS.all_sites_scored,
    ],
    additionalareas: [
        DATA_LAYERS.additional_sites_model
    ],
    sitingcriteria: [
        DATA_LAYERS.transit_stops,
        DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
        DATA_LAYERS.tot_elignonreg_prc,
        DATA_LAYERS.prcdisabled, DATA_LAYERS.prc_nonengprof, DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final, DATA_LAYERS.prc_youth_final,
        DATA_LAYERS.pollvoter_dens,
        DATA_LAYERS.popdens,
        DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
    ],
    populationdata: [
        DATA_LAYERS.prc_black, DATA_LAYERS.prc_asian, DATA_LAYERS.prc_latino, DATA_LAYERS.prc_white,
    ],
    pointsofinterest: [
        DATA_LAYERS.pripoll2020joint, DATA_LAYERS.pripoll2020republican, DATA_LAYERS.pripoll2020democrat,
        // DATA_LAYERS.pricenter2020, 
        DATA_LAYERS.poi_govish, DATA_LAYERS.poi_misc, DATA_LAYERS.poi,
    ],
};

DATA_PROFILES.fullmodelCID = {
    suggestedareas: [
        DATA_LAYERS.election_day_sitesCID, DATA_LAYERS.early_voting_day_sitesCID, DATA_LAYERS.all_sites_scored,
    ],
    additionalareas: [
        DATA_LAYERS.additional_sites_modelCID
    ],
    sitingcriteria: [
        DATA_LAYERS.transit_stops,
        DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
        DATA_LAYERS.tot_elignonreg_prc,
        DATA_LAYERS.prcdisabled, DATA_LAYERS.prc_nonengprof, DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final, DATA_LAYERS.prc_youth_final,
        DATA_LAYERS.pollvoter_dens,
        DATA_LAYERS.popdens,
        DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
    ],
    populationdata: [
        DATA_LAYERS.prc_black, DATA_LAYERS.prc_asian, DATA_LAYERS.prc_latino, DATA_LAYERS.prc_white,
    ],
    pointsofinterest: [
        DATA_LAYERS.pripoll2020joint, DATA_LAYERS.pripoll2020republican, DATA_LAYERS.pripoll2020democrat,
        // DATA_LAYERS.pricenter2020, 
        DATA_LAYERS.poi_govish, DATA_LAYERS.poi_misc, DATA_LAYERS.poi,
    ],
};

DATA_PROFILES.lite = Object.assign({}, DATA_PROFILES.fullmodel);
DATA_PROFILES.lite.suggestedareas = [];
DATA_PROFILES.lite.additionalareas = [];
DATA_PROFILES.lite.pointsofinterest = [
    DATA_LAYERS.pripoll2020joint, DATA_LAYERS.pripoll2020republican, DATA_LAYERS.pripoll2020democrat,
];
DATA_PROFILES.lite.sitingcriteria = [
    DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
    DATA_LAYERS.tot_elignonreg_prc,
    DATA_LAYERS.prcdisabled, DATA_LAYERS.prc_nonengprof, DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final, DATA_LAYERS.prc_youth_final,
    DATA_LAYERS.pollvoter_dens,
    DATA_LAYERS.popdens,
    DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
];
DATA_PROFILES.harris = Object.assign({}, DATA_PROFILES.fullmodel);
DATA_PROFILES.harris.pointsofinterest = [
    DATA_LAYERS.pricenter2020, 
    DATA_LAYERS.poi_govish, DATA_LAYERS.poi_misc, DATA_LAYERS.poi,
];

// popup hacks: some counties need random hacks to their popup content, e.g. Los Angeles 2020 Primary Vote Center Locations has a bunch of extra fields
// define this callback-style function to do postprocessing on the HTML of the popup content
const popupContentPostprocessing = function (initialpopuphtml, countyfp, layerinfo, featureproperties) {
    let html = initialpopuphtml;

    if (countyfp == '037' && layerinfo.id == 'pricenter2020') {
        html += '<br />';
        html += `<b>Election Day Votes:</b> ${featureproperties.ElecDayVotes}`;
        html += '<br />';
        html += `<b>Early Votes:</b> ${featureproperties.EarlyVotes}`;
        html += '<br />';
        html += `<b>Average Wait Time:</b> ${featureproperties.WaitTimeHr} hours`;
        html += "<p><i>Data provided by the Los Angeles County Registrar's office. Voting patterns could be different in a general election versus a primary.</i></p>";
    }

    return html;
};
