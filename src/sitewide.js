// the list of counties which are participating in this siting tool
// countyfp (three-digit FIPS code) is used to link to a GeoJSON entry nmap behaviors
// see also getParticipatingCountyInfo() for a handy-dandy wrapper to fetch one of these county entries by countyfp
//
// datafootnote = optional footnote which will be added to map legend popups for that county
// outoforder = optional message to display in top-left of county page, indicating that this county data are questionable
// exceptlayers = skip these layers when loading the data profile, for counties to opt-out from individual layers
const PARTICIPATING_COUNTIES = [
    //SSS// TX has 3 classes: fullmodel_vc for vote centers, fullmodel_pp for polling places, and harris for Harris county (VC)
    { countyfp: "001", name: "Anderson", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "003", name: "Andrews", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "005", name: "Angelina", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "007", name: "Aransas", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "009", name: "Archer", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "011", name: "Armstrong", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "013", name: "Atascosa", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "015", name: "Austin", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "017", name: "Bailey", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "019", name: "Bandera", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "021", name: "Bastrop", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "023", name: "Baylor", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "025", name: "Bee", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "027", name: "Bell", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "029", name: "Bexar", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "031", name: "Blanco", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "033", name: "Borden", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "035", name: "Bosque", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "037", name: "Bowie", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "039", name: "Brazoria", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "041", name: "Brazos", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "043", name: "Brewster", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "045", name: "Briscoe", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "047", name: "Brooks", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "049", name: "Brown", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "051", name: "Burleson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "053", name: "Burnet", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "055", name: "Caldwell", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "057", name: "Calhoun", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "059", name: "Callahan", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "061", name: "Cameron", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "063", name: "Camp", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "065", name: "Carson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "067", name: "Cass", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "069", name: "Castro", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "071", name: "Chambers", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "073", name: "Cherokee", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "075", name: "Childress", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "077", name: "Clay", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "079", name: "Cochran", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "081", name: "Coke", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "083", name: "Coleman", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "085", name: "Collin", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "087", name: "Collingsworth", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "089", name: "Colorado", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "091", name: "Comal", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "093", name: "Comanche", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "095", name: "Concho", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "097", name: "Cooke", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "099", name: "Coryell", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "101", name: "Cottle", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "103", name: "Crane", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "105", name: "Crockett", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "107", name: "Crosby", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "109", name: "Culberson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "111", name: "Dallam", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "113", name: "Dallas", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "115", name: "Dawson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "117", name: "Deaf Smith", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "119", name: "Delta", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "121", name: "Denton", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "123", name: "Dewitt", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "125", name: "Dickens", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "127", name: "Dimmit", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "129", name: "Donley", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "131", name: "Duval", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "133", name: "Eastland", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "135", name: "Ector", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "137", name: "Edwards", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "141", name: "El Paso", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "139", name: "Ellis", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "143", name: "Erath", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "145", name: "Falls", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "147", name: "Fannin", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "149", name: "Fayette", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "151", name: "Fisher", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "153", name: "Floyd", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "155", name: "Foard", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "157", name: "Fort Bend", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "159", name: "Franklin", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "161", name: "Freestone", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "163", name: "Frio", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "165", name: "Gaines", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "167", name: "Galveston", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "169", name: "Garza", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "171", name: "Gillespie", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "173", name: "Glasscock", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "175", name: "Goliad", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "177", name: "Gonzales", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "179", name: "Gray", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "181", name: "Grayson", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "183", name: "Gregg", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "185", name: "Grimes", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "187", name: "Guadalupe", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "189", name: "Hale", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "191", name: "Hall", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "193", name: "Hamilton", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "195", name: "Hansford", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "197", name: "Hardeman", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "199", name: "Hardin", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "201", name: "Harris", profile: "harris", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "203", name: "Harrison", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "205", name: "Hartley", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "207", name: "Haskell", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "209", name: "Hays", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "211", name: "Hemphill", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "213", name: "Henderson", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "215", name: "Hidalgo", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "217", name: "Hill", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "219", name: "Hockley", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "221", name: "Hood", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "223", name: "Hopkins", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "225", name: "Houston", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "227", name: "Howard", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "229", name: "Hudspeth", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "231", name: "Hunt", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "233", name: "Hutchinson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "235", name: "Irion", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "237", name: "Jack", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "239", name: "Jackson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "241", name: "Jasper", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "243", name: "Jeff Davis", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "245", name: "Jefferson", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "247", name: "Jim Hogg", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "249", name: "Jim Wells", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "251", name: "Johnson", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "253", name: "Jones", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "255", name: "Karnes", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "257", name: "Kaufman", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "259", name: "Kendall", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "261", name: "Kenedy", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "263", name: "Kent", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "265", name: "Kerr", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "267", name: "Kimble", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "269", name: "King", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "271", name: "Kinney", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "273", name: "Kleberg", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "275", name: "Knox", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "283", name: "La Salle", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "277", name: "Lamar", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "279", name: "Lamb", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "281", name: "Lampasas", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "285", name: "Lavaca", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "287", name: "Lee", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "289", name: "Leon", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "291", name: "Liberty", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "293", name: "Limestone", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "295", name: "Lipscomb", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "297", name: "Live Oak", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "299", name: "Llano", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "301", name: "Loving", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "303", name: "Lubbock", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "305", name: "Lynn", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "313", name: "Madison", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "315", name: "Marion", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "317", name: "Martin", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "319", name: "Mason", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "321", name: "Matagorda", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "323", name: "Maverick", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "307", name: "Mcculloch", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "309", name: "Mclennan", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "311", name: "Mcmullen", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "325", name: "Medina", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "327", name: "Menard", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "329", name: "Midland", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "331", name: "Milam", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "333", name: "Mills", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "335", name: "Mitchell", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "337", name: "Montague", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "339", name: "Montgomery", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "341", name: "Moore", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "343", name: "Morris", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "345", name: "Motley", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "347", name: "Nacogdoches", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "349", name: "Navarro", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "351", name: "Newton", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "353", name: "Nolan", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "355", name: "Nueces", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "357", name: "Ochiltree", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "359", name: "Oldham", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "361", name: "Orange", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "363", name: "Palo Pinto", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "365", name: "Panola", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "367", name: "Parker", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "369", name: "Parmer", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "371", name: "Pecos", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "373", name: "Polk", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "375", name: "Potter", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "377", name: "Presidio", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "379", name: "Rains", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "381", name: "Randall", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "383", name: "Reagan", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "385", name: "Real", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "387", name: "Red River", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "389", name: "Reeves", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "391", name: "Refugio", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "393", name: "Roberts", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "395", name: "Robertson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "397", name: "Rockwall", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "399", name: "Runnels", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "401", name: "Rusk", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "403", name: "Sabine", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "405", name: "San Augustine", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "407", name: "San Jacinto", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "409", name: "San Patricio", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "411", name: "San Saba", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "413", name: "Schleicher", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "415", name: "Scurry", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "417", name: "Shackelford", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "419", name: "Shelby", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "421", name: "Sherman", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "423", name: "Smith", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "425", name: "Somervell", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "427", name: "Starr", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "429", name: "Stephens", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "431", name: "Sterling", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "433", name: "Stonewall", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "435", name: "Sutton", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "437", name: "Swisher", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "439", name: "Tarrant", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "441", name: "Taylor", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "443", name: "Terrell", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "445", name: "Terry", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "447", name: "Throckmorton", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "449", name: "Titus", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "451", name: "Tom Green", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "453", name: "Travis", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "455", name: "Trinity", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "457", name: "Tyler", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "459", name: "Upshur", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "461", name: "Upton", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "463", name: "Uvalde", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "465", name: "Val Verde", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "467", name: "Van Zandt", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "469", name: "Victoria", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "471", name: "Walker", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "473", name: "Waller", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "475", name: "Ward", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "477", name: "Washington", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "479", name: "Webb", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "481", name: "Wharton", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "483", name: "Wheeler", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "485", name: "Wichita", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "487", name: "Wilbarger", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "489", name: "Willacy", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "491", name: "Williamson", profile: "fullmodel_vc", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "493", name: "Wilson", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "495", name: "Winkler", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "497", name: "Wise", profile: "fullmodel_pp", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "499", name: "Wood", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "501", name: "Yoakum", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "503", name: "Young", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "505", name: "Zapata", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
    { countyfp: "507", name: "Zavala", profile: "lite", outoforder: "", datafootnote: "", exceptlayers: [] },
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

DATA_LAYERS.election_day_sites_vc = {
    id: 'election_day_sites',
    title: "Suggested Areas for Election Day Vote Centers",
    csvfile: 'model_files/election_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/election_day_sites_shp.zip',
};
DATA_LAYERS.election_day_sites_pp = {
    id: 'election_day_sites',
    title: "Suggested Areas for Election Day Voting Locations",
    csvfile: 'model_files/election_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/election_day_sites_shp.zip',
};
DATA_LAYERS.early_voting_day_sites_vc = {
    id: 'early_voting_day_sites',
    title: "Suggested Areas for Early Vote Centers",
    csvfile: 'model_files/early_voting_day_sites.csv',
    circle: { radius: 400, opacity: 0.8, color: 'black', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'high',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/early_voting_day_sites_shp.zip',
};
DATA_LAYERS.early_voting_day_sites_pp = {
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
DATA_LAYERS.additional_sites_model_vc = {
    id: 'additional_sites_model',
    title: "Additional Vote Center Options Based on Model",
    csvfile: 'model_files/additional_sites_model.csv',
    circle: { radius: 400, opacity: 0.8, color: 'blue', weight: 1, fillColor: 'quantile', fillOpacity: 0.8 },
    quantilefield: 'center_score', quantilecolors: SCORING_COLOR_RAMP, breaksource: 'sitescores', // because fillColor == quantile
    mapzindex: 'medium',
    legendformat: 'lowtohigh',
    downloadfile: 'model_files/additional_sites_model_shp.zip',
};
DATA_LAYERS.additional_sites_model_pp = {
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
    title: "Percent of County Voting Age Citizens",
    scoresource: 'indicatordata', scorefield:  'cvapdens',
    quantilefield: 'cvapdens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.job_dens = {
    id: 'job_dens',
    title: "Percent of County Workers",
    scoresource: 'indicatordata', scorefield:  'job_dens',
    quantilefield: 'job_dens', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.tot_elignonreg_prc = {
    id: 'tot_elignonreg_prc',
    title: "Percent of Eligible Voters Not Registered",
    scoresource: 'indicatordata', scorefield:  'tot_elignonreg_prc_final',
    quantilefield: 'tot_elignonreg_prc_final' , quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prcdisabled = {
    id: 'prcdisabled',
    title: "Disabilities Percent of Population",
    scoresource: 'indicatordata', scorefield:  'prcdisabled_final',
    quantilefield: 'prcdisabled_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_nonengprof = {
    id: 'prc_nonengprof',
    title: "Limited English Proficient Percent of Population",
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
    title: "Youth Percent of Population",
    scoresource: 'indicatordata', scorefield:  'prc_youth_final',
    quantilefield: 'prc_youth_final', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.pollvoter_dens = {
    id: 'pollvoter_dens',
    title: "2016 Polling Place Voter Percentage",
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
    id: '2016 vbm_rate_youth',
    title: "2016 Vote by Mail Rate (Youth)",
    scoresource: 'indicatordata', scorefield:  'vbm_rate_youth',
    quantilefield: 'vbm_rate_youth', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_black = {
    id: 'prc_black',
    title: "African-American Percent of Population",
    scoresource: 'indicatordata', scorefield: 'prc_black',
    quantilefield: 'prc_black', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_asian = {
    id: 'prc_asian',
    title: "Asian-American Percent of Population",
    scoresource: 'indicatordata', scorefield: 'prc_asian',
    quantilefield: 'prc_asian', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_latino = {
    id: 'prc_latino',
    title: "Latino Percent of Population",
    scoresource: 'indicatordata', scorefield: 'prc_latino',
    quantilefield: 'prc_latino', quantilecolors: CRITERIA_COLOR_RAMP, breaksource: 'indicatordata', // because fillColor == quantile
    legendformat: 'percent',
    radiogroup: 'tractchoropleths',
};
DATA_LAYERS.prc_white = {
    id: 'prc_white',
    title: "White Percent of Population",
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

DATA_PROFILES.fullmodel_vc = {
    suggestedareas: [
        DATA_LAYERS.election_day_sites_vc, DATA_LAYERS.early_voting_day_sites_vc, DATA_LAYERS.all_sites_scored,
    ],
    additionalareas: [
        DATA_LAYERS.additional_sites_model_vc
    ],
    sitingcriteria: [
        DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
        DATA_LAYERS.tot_elignonreg_prc,
        DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final, 
        DATA_LAYERS.popdens,
        DATA_LAYERS.pollvoter_dens,
        DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
    ],
    populationdata: [
        DATA_LAYERS.prc_black, 
        DATA_LAYERS.prc_asian,
        DATA_LAYERS.prc_latino, 
        DATA_LAYERS.prc_white, 
        DATA_LAYERS.prc_youth_final,
        DATA_LAYERS.prcdisabled, 
        DATA_LAYERS.prc_nonengprof, 
    ],
    pointsofinterest: [
        DATA_LAYERS.pripoll2020joint, DATA_LAYERS.pripoll2020republican, DATA_LAYERS.pripoll2020democrat,
        DATA_LAYERS.transit_stops,
        // DATA_LAYERS.pricenter2020, 
        DATA_LAYERS.poi_govish, DATA_LAYERS.poi_misc, DATA_LAYERS.poi,
    ],
};

DATA_PROFILES.fullmodel_pp = {
    suggestedareas: [
        DATA_LAYERS.election_day_sites_pp, DATA_LAYERS.early_voting_day_sites_pp, DATA_LAYERS.all_sites_scored,
    ],
    additionalareas: [
        DATA_LAYERS.additional_sites_model_pp
    ],
    sitingcriteria: [
        DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
        DATA_LAYERS.tot_elignonreg_prc,
        DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final, 
        DATA_LAYERS.popdens,
        DATA_LAYERS.pollvoter_dens,
        DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
    ],
    populationdata: [
        DATA_LAYERS.prc_black, 
        DATA_LAYERS.prc_asian,
        DATA_LAYERS.prc_latino, 
        DATA_LAYERS.prc_white, 
        DATA_LAYERS.prc_youth_final,
        DATA_LAYERS.prcdisabled, 
        DATA_LAYERS.prc_nonengprof, 
    ],
    pointsofinterest: [
        DATA_LAYERS.pripoll2020joint, DATA_LAYERS.pripoll2020republican, DATA_LAYERS.pripoll2020democrat,
        // DATA_LAYERS.pricenter2020, 
        DATA_LAYERS.transit_stops,
        DATA_LAYERS.poi_govish, DATA_LAYERS.poi_misc, DATA_LAYERS.poi,
    ],
};

DATA_PROFILES.lite = Object.assign({}, DATA_PROFILES.fullmodel_vc);
DATA_PROFILES.lite.suggestedareas = [];
DATA_PROFILES.lite.additionalareas = [];
DATA_PROFILES.lite.pointsofinterest = [
    DATA_LAYERS.pripoll2020joint, DATA_LAYERS.pripoll2020republican, DATA_LAYERS.pripoll2020democrat,
];
DATA_PROFILES.lite.sitingcriteria = [
    DATA_LAYERS.cvapdens, DATA_LAYERS.job_dens,
    DATA_LAYERS.tot_elignonreg_prc,
    DATA_LAYERS.prc_caraccess_final, DATA_LAYERS.prc_pov_final,
    DATA_LAYERS.pollvoter_dens,
    DATA_LAYERS.popdens,
    DATA_LAYERS.vbm_rate_tot, DATA_LAYERS.vbm_rate_asn, DATA_LAYERS.vbm_rate_lat, DATA_LAYERS.vbm_rate_youth,
];
DATA_PROFILES.harris = Object.assign({}, DATA_PROFILES.fullmodel_vc);
DATA_PROFILES.harris.pointsofinterest = [
    DATA_LAYERS.pricenter2020, 
    DATA_LAYERS.transit_stops,
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
