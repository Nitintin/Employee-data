const Employee = [
    {
        "username": "admin",
        "password": "admin",
        "name": {
            "first": "Adam",
            "last": "Ministrator"
        },
        "ssn": "123-45-6789",
        "dob": "1900-01-01T06:00:00.000Z",
        "hiredOn": "1900-01-01T06:00:00.000Z",
        "terminatedOn": null,
        "email": "admin@company.com",
        "phones": [
            {
                "type": "office",
                "number": "123-456-7890"
            }
        ],
        "address": {
            "street": "7251 Walnut Hill Ln",
            "city": "Scurry",
            "state": "Oregon",
            "zip": "36713"
        },
        "roles": [
            "admin",
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/admin.jpg",
        "thumbnail": "portraits/admin-thumb.jpg"
    },
    {
        "username": "jdoe",
        "password": "jdoe",
        "name": {
            "first": "John",
            "last": "Doe"
        },
        "ssn": "704-23-6085",
        "dob": "1978-10-02T05:00:00.000Z",
        "hiredOn": "2002-04-11T05:00:00.000Z",
        "terminatedOn": null,
        "email": "john.doe@company.com",
        "phones": [
            {
                "type": "office",
                "number": "456-789-1230"
            },
            {
                "type": "cell",
                "number": "654-321-0987"
            }
        ],
        "address": {
            "street": "3199 Country Club Rd",
            "city": "Fremont",
            "state": "Virginia",
            "zip": "94390"
        },
        "roles": [
            "hourly",
            "part time",
            "consultant"
        ],
        "department": "Marketing",
        "gender": "male",
        "portrait": "portraits/jdoe.jpg",
        "thumbnail": "portraits/jdoe-thumb.jpg"
    },
    {
        "username": "purplewolf498",
        "password": "personal",
        "name": {
            "first": "Yolanda",
            "last": "Bishop"
        },
        "ssn": "929-54-2428",
        "dob": "1965-12-08T06:00:00.000Z",
        "hiredOn": "1989-08-14T05:00:00.000Z",
        "terminatedOn": null,
        "email": "yolanda.bishop25@company.com",
        "phones": [
            {
                "type": "office",
                "number": "612-204-4421"
            },
            {
                "type": "cell",
                "number": "380-959-3396"
            }
        ],
        "address": {
            "street": "4969 Lovers Ln",
            "city": "Elko",
            "state": "Utah",
            "zip": "98260"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/purplewolf498.jpg",
        "thumbnail": "portraits/purplewolf498-thumb.jpg"
    },
    {
        "username": "whitecat698",
        "password": "jenny1",
        "name": {
            "first": "Allen",
            "last": "Hansen"
        },
        "ssn": "504-23-5361",
        "dob": "1965-12-15T06:00:00.000Z",
        "hiredOn": "1988-03-26T06:00:00.000Z",
        "terminatedOn": null,
        "email": "allen.hansen47@company.com",
        "phones": [
            {
                "type": "office",
                "number": "377-837-4817"
            },
            {
                "type": "cell",
                "number": "787-513-9084"
            }
        ],
        "address": {
            "street": "1902 Plum St",
            "city": "Akron",
            "state": "Hawaii",
            "zip": "26975"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/whitecat698.jpg",
        "thumbnail": "portraits/whitecat698-thumb.jpg"
    },
    {
        "username": "bluepanda840",
        "password": "funfun",
        "name": {
            "first": "Leslie",
            "last": "Vasquez"
        },
        "ssn": "906-45-7380",
        "dob": "1986-10-12T05:00:00.000Z",
        "hiredOn": "2011-10-24T05:00:00.000Z",
        "terminatedOn": null,
        "email": "leslie.vasquez65@company.com",
        "phones": [
            {
                "type": "office",
                "number": "854-988-2654"
            },
            {
                "type": "home",
                "number": "106-146-7963"
            }
        ],
        "address": {
            "street": "7255 Camden Ave",
            "city": "Frederick",
            "state": "Michigan",
            "zip": "10865"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/bluepanda840.jpg",
        "thumbnail": "portraits/bluepanda840-thumb.jpg"
    },
    {
        "username": "lazypanda966",
        "password": "start1",
        "name": {
            "first": "Georgia",
            "last": "Bryant"
        },
        "ssn": "326-59-7200",
        "dob": "1966-12-08T06:00:00.000Z",
        "hiredOn": "2006-12-24T06:00:00.000Z",
        "terminatedOn": null,
        "email": "georgia.bryant83@company.com",
        "phones": [
            {
                "type": "office",
                "number": "716-661-6412"
            },
            {
                "type": "cell",
                "number": "493-794-9872"
            }
        ],
        "address": {
            "street": "8291 Hunters Creek Dr",
            "city": "Billings",
            "state": "Oklahoma",
            "zip": "95089"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/lazypanda966.jpg",
        "thumbnail": "portraits/lazypanda966-thumb.jpg"
    },
    {
        "username": "bigelephant907",
        "password": "model",
        "name": {
            "first": "Troy",
            "last": "Hart"
        },
        "ssn": "452-13-6989",
        "dob": "1988-06-24T05:00:00.000Z",
        "hiredOn": "2012-01-05T06:00:00.000Z",
        "terminatedOn": null,
        "email": "troy.hart74@company.com",
        "phones": [
            {
                "type": "office",
                "number": "222-799-4554"
            },
            {
                "type": "cell",
                "number": "603-396-4054"
            }
        ],
        "address": {
            "street": "7665 Washington Ave",
            "city": "Indianapolis",
            "state": "Connecticut",
            "zip": "23222"
        },
        "roles": [
            "salaried",
            "part time",
            "consultant"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/bigelephant907.jpg",
        "thumbnail": "portraits/bigelephant907-thumb.jpg"
    },
    {
        "username": "ticklishgorilla951",
        "password": "sparky",
        "name": {
            "first": "Andrew",
            "last": "Jackson"
        },
        "ssn": "693-12-9075",
        "dob": "1977-01-15T06:00:00.000Z",
        "hiredOn": "2011-09-05T05:00:00.000Z",
        "terminatedOn": "2013-04-25T05:00:00.000Z",
        "email": "andrew.jackson62@company.com",
        "phones": [
            {
                "type": "office",
                "number": "166-121-9675"
            },
            {
                "type": "cell",
                "number": "599-669-7982"
            }
        ],
        "address": {
            "street": "4815 Bollinger Rd",
            "city": "Caldwell",
            "state": "Kentucky",
            "zip": "89310"
        },
        "roles": [
            "hourly",
            "full time",
            "contractor"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/ticklishgorilla951.jpg",
        "thumbnail": "portraits/ticklishgorilla951-thumb.jpg"
    },
    {
        "username": "whitekoala138",
        "password": "gina",
        "name": {
            "first": "John",
            "last": "Jackson"
        },
        "ssn": "163-60-5769",
        "dob": "1989-07-09T05:00:00.000Z",
        "hiredOn": "2013-05-25T05:00:00.000Z",
        "terminatedOn": null,
        "email": "harvey.lawrence68@company.com",
        "phones": [
            {
                "type": "office",
                "number": "378-892-2670"
            },
            {
                "type": "cell",
                "number": "536-675-2892"
            }
        ],
        "address": {
            "street": "3081 Paddock Way",
            "city": "Shiloh",
            "state": "Texas",
            "zip": "32142"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/whitekoala138.jpg",
        "thumbnail": "portraits/whitekoala138-thumb.jpg"
    },
    {
        "username": "yellowladybug535",
        "password": "qwer",
        "name": {
            "first": "Roberta",
            "last": "Morgan"
        },
        "ssn": "423-85-9453",
        "dob": "1969-05-17T05:00:00.000Z",
        "hiredOn": "2012-04-14T05:00:00.000Z",
        "terminatedOn": null,
        "email": "roberta.morgan39@company.com",
        "phones": [
            {
                "type": "office",
                "number": "726-494-2648"
            },
            {
                "type": "cell",
                "number": "106-629-8149"
            }
        ],
        "address": {
            "street": "2819 Woodland St",
            "city": "Sunnyvale",
            "state": "Wisconsin",
            "zip": "14618"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/yellowladybug535.jpg",
        "thumbnail": "portraits/yellowladybug535-thumb.jpg"
    },
    {
        "username": "yellowbird271",
        "password": "inter",
        "name": {
            "first": "Judith",
            "last": "Hill"
        },
        "ssn": "218-16-5327",
        "dob": "1991-07-05T05:00:00.000Z",
        "hiredOn": "2014-06-13T05:00:00.000Z",
        "terminatedOn": null,
        "email": "judith.reid60@company.com",
        "phones": [
            {
                "type": "office",
                "number": "280-961-5125"
            },
            {
                "type": "home",
                "number": "489-828-7266"
            }
        ],
        "address": {
            "street": "2022 Spring St",
            "city": "Edgewood",
            "state": "Connecticut",
            "zip": "61320"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/yellowbird271.jpg",
        "thumbnail": "portraits/yellowbird271-thumb.jpg"
    },
    {
        "username": "bluegorilla84",
        "password": "skate",
        "name": {
            "first": "Herbert",
            "last": "Smith"
        },
        "ssn": "857-77-3546",
        "dob": "1987-01-23T06:00:00.000Z",
        "hiredOn": "2010-07-22T05:00:00.000Z",
        "terminatedOn": null,
        "email": "herbert.jimenez24@company.com",
        "phones": [
            {
                "type": "office",
                "number": "547-599-7247"
            },
            {
                "type": "home",
                "number": "547-567-4102"
            }
        ],
        "address": {
            "street": "1358 Elgin St",
            "city": "Rio Rancho",
            "state": "South Dakota",
            "zip": "22109"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/bluegorilla84.jpg",
        "thumbnail": "portraits/bluegorilla84-thumb.jpg"
    },
    {
        "username": "greenwolf347",
        "password": "avalon",
        "name": {
            "first": "Rita",
            "last": "Elliott"
        },
        "ssn": "285-24-7202",
        "dob": "1986-03-22T06:00:00.000Z",
        "hiredOn": "2010-09-02T05:00:00.000Z",
        "terminatedOn": null,
        "email": "rita.elliott58@company.com",
        "phones": [
            {
                "type": "office",
                "number": "509-358-3176"
            },
            {
                "type": "home",
                "number": "808-767-7702"
            }
        ],
        "address": {
            "street": "8319 College St",
            "city": "Toledo",
            "state": "Nebraska",
            "zip": "96351"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Human Resources",
        "gender": "female",
        "portrait": "portraits/greenwolf347.jpg",
        "thumbnail": "portraits/greenwolf347-thumb.jpg"
    },
    {
        "username": "orangeelephant668",
        "password": "volleyba",
        "name": {
            "first": "Natalie",
            "last": "Russell"
        },
        "ssn": "713-16-2496",
        "dob": "1980-11-17T06:00:00.000Z",
        "hiredOn": "2010-04-19T05:00:00.000Z",
        "terminatedOn": null,
        "email": "natalie.russell65@company.com",
        "phones": [
            {
                "type": "office",
                "number": "637-554-9381"
            },
            {
                "type": "cell",
                "number": "268-761-7711"
            }
        ],
        "address": {
            "street": "9337 Hogan St",
            "city": "Roseburg",
            "state": "Arkansas",
            "zip": "77421"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/orangeelephant668.jpg",
        "thumbnail": "portraits/orangeelephant668-thumb.jpg"
    },
    {
        "username": "crazypanda274",
        "password": "hansolo",
        "name": {
            "first": "Gina",
            "last": "Mccoy"
        },
        "ssn": "843-86-3210",
        "dob": "1970-08-13T05:00:00.000Z",
        "hiredOn": "2014-12-21T06:00:00.000Z",
        "terminatedOn": null,
        "email": "gina.mccoy13@company.com",
        "phones": [
            {
                "type": "office",
                "number": "968-695-9354"
            },
            {
                "type": "home",
                "number": "162-343-7181"
            }
        ],
        "address": {
            "street": "7345 Locust Rd",
            "city": "Ironville",
            "state": "Florida",
            "zip": "78134"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/crazypanda274.jpg",
        "thumbnail": "portraits/crazypanda274-thumb.jpg"
    },
    {
        "username": "whitecat119",
        "password": "mason",
        "name": {
            "first": "Eduardo",
            "last": "Porter"
        },
        "ssn": "930-33-6421",
        "dob": "1967-06-02T05:00:00.000Z",
        "hiredOn": "2007-06-25T05:00:00.000Z",
        "terminatedOn": "2012-02-17T06:00:00.000Z",
        "email": "eduardo.porter98@company.com",
        "phones": [
            {
                "type": "office",
                "number": "982-852-9258"
            },
            {
                "type": "cell",
                "number": "836-804-2719"
            }
        ],
        "address": {
            "street": "7028 Frances Ct",
            "city": "Henderson",
            "state": "Michigan",
            "zip": "68957"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/whitecat119.jpg",
        "thumbnail": "portraits/whitecat119-thumb.jpg"
    },
    {
        "username": "whitemouse304",
        "password": "stimpy",
        "name": {
            "first": "Priscilla",
            "last": "Hill"
        },
        "ssn": "603-83-1809",
        "dob": "1986-04-08T06:00:00.000Z",
        "hiredOn": "2010-11-19T06:00:00.000Z",
        "terminatedOn": null,
        "email": "priscilla.mitchell22@company.com",
        "phones": [
            {
                "type": "office",
                "number": "464-509-7488"
            },
            {
                "type": "cell",
                "number": "118-790-1692"
            }
        ],
        "address": {
            "street": "7713 First Street",
            "city": "New Haven",
            "state": "Connecticut",
            "zip": "42732"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/whitemouse304.jpg",
        "thumbnail": "portraits/whitemouse304-thumb.jpg"
    },
    {
        "username": "beautifulleopard367",
        "password": "claude",
        "name": {
            "first": "Pedro",
            "last": "Peterson"
        },
        "ssn": "405-48-3908",
        "dob": "1982-06-12T05:00:00.000Z",
        "hiredOn": "2005-10-21T05:00:00.000Z",
        "terminatedOn": null,
        "email": "pedro.peterson70@company.com",
        "phones": [
            {
                "type": "office",
                "number": "256-436-7216"
            },
            {
                "type": "cell",
                "number": "521-123-1270"
            }
        ],
        "address": {
            "street": "4137 Lone Wolf Trail",
            "city": "Boulder",
            "state": "Texas",
            "zip": "58987"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/beautifulleopard367.jpg",
        "thumbnail": "portraits/beautifulleopard367-thumb.jpg"
    },
    {
        "username": "whitepeacock532",
        "password": "zouzou",
        "name": {
            "first": "Darlene",
            "last": "Duncan"
        },
        "ssn": "431-86-4864",
        "dob": "1980-03-02T06:00:00.000Z",
        "hiredOn": "2002-06-17T05:00:00.000Z",
        "terminatedOn": null,
        "email": "darlene.duncan94@company.com",
        "phones": [
            {
                "type": "office",
                "number": "238-413-5068"
            },
            {
                "type": "cell",
                "number": "337-590-1205"
            }
        ],
        "address": {
            "street": "9913 Stevens Creek Blvd",
            "city": "Evansville",
            "state": "Minnesota",
            "zip": "37697"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "female",
        "portrait": "portraits/whitepeacock532.jpg",
        "thumbnail": "portraits/whitepeacock532-thumb.jpg"
    },
    {
        "username": "blackpanda237",
        "password": "novell",
        "name": {
            "first": "Laurie",
            "last": "Castro"
        },
        "ssn": "145-95-4662",
        "dob": "1977-06-04T05:00:00.000Z",
        "hiredOn": "2011-03-08T06:00:00.000Z",
        "terminatedOn": null,
        "email": "laurie.castro82@company.com",
        "phones": [
            {
                "type": "office",
                "number": "761-689-8002"
            },
            {
                "type": "cell",
                "number": "169-813-9866"
            }
        ],
        "address": {
            "street": "9199 E North St",
            "city": "Coppell",
            "state": "Michigan",
            "zip": "21627"
        },
        "roles": [
            "hourly",
            "part time",
            "contractor"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/blackpanda237.jpg",
        "thumbnail": "portraits/blackpanda237-thumb.jpg"
    },
    {
        "username": "greenfish196",
        "password": "melanie",
        "name": {
            "first": "Deann",
            "last": "Williamson"
        },
        "ssn": "614-57-5859",
        "dob": "1992-01-15T06:00:00.000Z",
        "hiredOn": "2012-06-24T05:00:00.000Z",
        "terminatedOn": null,
        "email": "deann.williamson57@company.com",
        "phones": [
            {
                "type": "office",
                "number": "282-114-8353"
            },
            {
                "type": "cell",
                "number": "723-910-9298"
            }
        ],
        "address": {
            "street": "1772 Spring St",
            "city": "Tacoma",
            "state": "South Dakota",
            "zip": "11875"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/greenfish196.jpg",
        "thumbnail": "portraits/greenfish196-thumb.jpg"
    },
    {
        "username": "ticklishdog505",
        "password": "revolver",
        "name": {
            "first": "Irene",
            "last": "Gutierrez"
        },
        "ssn": "815-56-8221",
        "dob": "1992-12-17T06:00:00.000Z",
        "hiredOn": "2013-01-17T06:00:00.000Z",
        "terminatedOn": null,
        "email": "irene.gutierrez33@company.com",
        "phones": [
            {
                "type": "office",
                "number": "601-692-3621"
            },
            {
                "type": "home",
                "number": "577-170-8972"
            }
        ],
        "address": {
            "street": "9977 Saddle Dr",
            "city": "Mesquite",
            "state": "Idaho",
            "zip": "52655"
        },
        "roles": [
            "salaried",
            "part time",
            "contractor"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/ticklishdog505.jpg",
        "thumbnail": "portraits/ticklishdog505-thumb.jpg"
    },
    {
        "username": "redrabbit642",
        "password": "sheng",
        "name": {
            "first": "Samuel",
            "last": "Smith"
        },
        "ssn": "773-79-4617",
        "dob": "1974-05-19T05:00:00.000Z",
        "hiredOn": "2012-09-25T05:00:00.000Z",
        "terminatedOn": null,
        "email": "samuel.nelson94@company.com",
        "phones": [
            {
                "type": "office",
                "number": "392-475-4229"
            },
            {
                "type": "cell",
                "number": "509-988-2972"
            }
        ],
        "address": {
            "street": "1428 Cherry St",
            "city": "Los Lunas",
            "state": "Utah",
            "zip": "49737"
        },
        "roles": [
            "hourly",
            "part time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/redrabbit642.jpg",
        "thumbnail": "portraits/redrabbit642-thumb.jpg"
    },
    {
        "username": "beautifulcat2",
        "password": "1992",
        "name": {
            "first": "Kay",
            "last": "Walker"
        },
        "ssn": "739-82-8844",
        "dob": "1984-05-12T05:00:00.000Z",
        "hiredOn": "2004-12-20T06:00:00.000Z",
        "terminatedOn": null,
        "email": "kay.walker20@company.com",
        "phones": [
            {
                "type": "office",
                "number": "149-237-2905"
            },
            {
                "type": "cell",
                "number": "362-385-1106"
            }
        ],
        "address": {
            "street": "1323 W Campbell Ave",
            "city": "Evansville",
            "state": "Rhode Island",
            "zip": "53794"
        },
        "roles": [
            "salaried",
            "part time",
            "consultant"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/beautifulcat2.jpg",
        "thumbnail": "portraits/beautifulcat2-thumb.jpg"
    },
    {
        "username": "lazypeacock969",
        "password": "hothot",
        "name": {
            "first": "Loretta",
            "last": "Coleman"
        },
        "ssn": "449-78-7552",
        "dob": "1968-11-08T06:00:00.000Z",
        "hiredOn": "1995-10-07T05:00:00.000Z",
        "terminatedOn": null,
        "email": "loretta.coleman49@company.com",
        "phones": [
            {
                "type": "office",
                "number": "678-326-2799"
            },
            {
                "type": "cell",
                "number": "728-479-1804"
            }
        ],
        "address": {
            "street": "5402 Central St",
            "city": "Boulder",
            "state": "Oklahoma",
            "zip": "43718"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/lazypeacock969.jpg",
        "thumbnail": "portraits/lazypeacock969-thumb.jpg"
    },
    {
        "username": "biggoose954",
        "password": "1993",
        "name": {
            "first": "Stella",
            "last": "Ruiz"
        },
        "ssn": "337-27-4497",
        "dob": "1969-11-13T06:00:00.000Z",
        "hiredOn": "2008-02-07T06:00:00.000Z",
        "terminatedOn": null,
        "email": "stella.ruiz83@company.com",
        "phones": [
            {
                "type": "office",
                "number": "207-500-3443"
            },
            {
                "type": "home",
                "number": "550-748-8322"
            }
        ],
        "address": {
            "street": "4982 W Sherman Dr",
            "city": "Lexington",
            "state": "Virginia",
            "zip": "46533"
        },
        "roles": [
            "hourly",
            "part time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/biggoose954.jpg",
        "thumbnail": "portraits/biggoose954-thumb.jpg"
    },
    {
        "username": "bluerabbit187",
        "password": "kirk",
        "name": {
            "first": "Soham",
            "last": "Flores"
        },
        "ssn": "444-94-5888",
        "dob": "1981-07-13T05:00:00.000Z",
        "hiredOn": "2012-01-05T06:00:00.000Z",
        "terminatedOn": null,
        "email": "soham.flores34@company.com",
        "phones": [
            {
                "type": "office",
                "number": "628-232-8534"
            },
            {
                "type": "cell",
                "number": "841-693-4485"
            }
        ],
        "address": {
            "street": "5254 E North St",
            "city": "Joliet",
            "state": "Indiana",
            "zip": "76671"
        },
        "roles": [
            "hourly",
            "part time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/bluerabbit187.jpg",
        "thumbnail": "portraits/bluerabbit187-thumb.jpg"
    },
    {
        "username": "crazyostrich528",
        "password": "preston",
        "name": {
            "first": "Leslie",
            "last": "Bates"
        },
        "ssn": "542-45-3230",
        "dob": "1965-03-08T06:00:00.000Z",
        "hiredOn": "1990-05-07T05:00:00.000Z",
        "terminatedOn": null,
        "email": "leslie.bates95@company.com",
        "phones": [
            {
                "type": "office",
                "number": "890-543-2326"
            },
            {
                "type": "home",
                "number": "224-510-1813"
            }
        ],
        "address": {
            "street": "1741 W Pecan St",
            "city": "Forney",
            "state": "Ohio",
            "zip": "70913"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/crazyostrich528.jpg",
        "thumbnail": "portraits/crazyostrich528-thumb.jpg"
    },
    {
        "username": "yellowbird585",
        "password": "lollipop",
        "name": {
            "first": "Jayden",
            "last": "Jackson"
        },
        "ssn": "185-45-3075",
        "dob": "1984-12-11T06:00:00.000Z",
        "hiredOn": "2009-03-25T05:00:00.000Z",
        "terminatedOn": "2013-07-28T05:00:00.000Z",
        "email": "jayden.perry28@company.com",
        "phones": [
            {
                "type": "office",
                "number": "763-692-2070"
            },
            {
                "type": "home",
                "number": "873-269-7538"
            }
        ],
        "address": {
            "street": "1931 Mcgowen St",
            "city": "Helena",
            "state": "Delaware",
            "zip": "92581"
        },
        "roles": [
            "salaried",
            "full time",
            "consultant"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/yellowbird585.jpg",
        "thumbnail": "portraits/yellowbird585-thumb.jpg"
    },
    {
        "username": "bluemeercat66",
        "password": "bigfoot",
        "name": {
            "first": "John",
            "last": "Fields"
        },
        "ssn": "416-33-5904",
        "dob": "1979-01-22T06:00:00.000Z",
        "hiredOn": "2005-10-10T05:00:00.000Z",
        "terminatedOn": "2009-02-15T06:00:00.000Z",
        "email": "herbert.fields50@company.com",
        "phones": [
            {
                "type": "office",
                "number": "359-832-6262"
            },
            {
                "type": "cell",
                "number": "683-605-4954"
            }
        ],
        "address": {
            "street": "9357 Adams St",
            "city": "Eureka",
            "state": "Maine",
            "zip": "27861"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/bluemeercat66.jpg",
        "thumbnail": "portraits/bluemeercat66-thumb.jpg"
    },
    {
        "username": "ticklishgoose874",
        "password": "hakr",
        "name": {
            "first": "Leon",
            "last": "Gutierrez"
        },
        "ssn": "391-52-7701",
        "dob": "1965-05-25T05:00:00.000Z",
        "hiredOn": "2007-08-18T05:00:00.000Z",
        "terminatedOn": null,
        "email": "leon.gutierrez45@company.com",
        "phones": [
            {
                "type": "office",
                "number": "204-199-8167"
            },
            {
                "type": "home",
                "number": "302-211-6655"
            }
        ],
        "address": {
            "street": "3224 Hunters Creek Dr",
            "city": "Lowell",
            "state": "South Dakota",
            "zip": "90553"
        },
        "roles": [
            "salaried",
            "full time",
            "consultant"
        ],
        "department": "Marketing",
        "gender": "male",
        "portrait": "portraits/ticklishgoose874.jpg",
        "thumbnail": "portraits/ticklishgoose874-thumb.jpg"
    },
    {
        "username": "tinyduck628",
        "password": "portland",
        "name": {
            "first": "Ryan",
            "last": "Kuhn"
        },
        "ssn": "425-57-4836",
        "dob": "1984-12-28T06:00:00.000Z",
        "hiredOn": "2008-07-02T05:00:00.000Z",
        "terminatedOn": "2011-05-20T05:00:00.000Z",
        "email": "ryan.kuhn87@company.com",
        "phones": [
            {
                "type": "office",
                "number": "477-658-8081"
            },
            {
                "type": "cell",
                "number": "673-660-5924"
            }
        ],
        "address": {
            "street": "5848 Groveland Terrace",
            "city": "Caldwell",
            "state": "Montana",
            "zip": "66688"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/tinyduck628.jpg",
        "thumbnail": "portraits/tinyduck628-thumb.jpg"
    },
    {
        "username": "lazyrabbit169",
        "password": "nipple",
        "name": {
            "first": "Brent",
            "last": "King"
        },
        "ssn": "510-26-4636",
        "dob": "1986-10-16T05:00:00.000Z",
        "hiredOn": "2014-01-03T06:00:00.000Z",
        "terminatedOn": "2014-08-24T05:00:00.000Z",
        "email": "brent.king35@company.com",
        "phones": [
            {
                "type": "office",
                "number": "368-354-8777"
            },
            {
                "type": "home",
                "number": "262-224-8490"
            }
        ],
        "address": {
            "street": "2530 Pockrus Page Rd",
            "city": "Nashville",
            "state": "Nebraska",
            "zip": "60300"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/lazyrabbit169.jpg",
        "thumbnail": "portraits/lazyrabbit169-thumb.jpg"
    },
    {
        "username": "blackelephant246",
        "password": "northern",
        "name": {
            "first": "Leona",
            "last": "Bell"
        },
        "ssn": "670-80-2559",
        "dob": "1984-06-27T05:00:00.000Z",
        "hiredOn": "2009-02-09T06:00:00.000Z",
        "terminatedOn": null,
        "email": "leona.bell65@company.com",
        "phones": [
            {
                "type": "office",
                "number": "486-891-2611"
            },
            {
                "type": "cell",
                "number": "973-110-4634"
            }
        ],
        "address": {
            "street": "6729 Pecan Acres Ln",
            "city": "Rio Rancho",
            "state": "Washington",
            "zip": "36236"
        },
        "roles": [
            "salaried",
            "full time",
            "consultant"
        ],
        "department": "Human Resources",
        "gender": "female",
        "portrait": "portraits/blackelephant246.jpg",
        "thumbnail": "portraits/blackelephant246-thumb.jpg"
    },
    {
        "username": "smallostrich593",
        "password": "aberdeen",
        "name": {
            "first": "Evelyn",
            "last": "Wallace"
        },
        "ssn": "394-47-7510",
        "dob": "1990-01-22T06:00:00.000Z",
        "hiredOn": "2010-12-28T06:00:00.000Z",
        "terminatedOn": null,
        "email": "evelyn.wallace67@company.com",
        "phones": [
            {
                "type": "office",
                "number": "373-407-2581"
            },
            {
                "type": "home",
                "number": "773-308-8212"
            }
        ],
        "address": {
            "street": "5285 W 6 Th St",
            "city": "San Jose",
            "state": "Maine",
            "zip": "82809"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/smallostrich593.jpg",
        "thumbnail": "portraits/smallostrich593-thumb.jpg"
    },
    {
        "username": "ticklishbutterfly1",
        "password": "elliott",
        "name": {
            "first": "Yolanda",
            "last": "Neal"
        },
        "ssn": "926-35-3701",
        "dob": "1976-12-18T06:00:00.000Z",
        "hiredOn": "2001-12-06T06:00:00.000Z",
        "terminatedOn": null,
        "email": "yolanda.neal48@company.com",
        "phones": [
            {
                "type": "office",
                "number": "126-894-5345"
            },
            {
                "type": "cell",
                "number": "168-244-4914"
            }
        ],
        "address": {
            "street": "9050 Royal Ln",
            "city": "Tacoma",
            "state": "Idaho",
            "zip": "45089"
        },
        "roles": [
            "salaried",
            "part time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/ticklishbutterfly1.jpg",
        "thumbnail": "portraits/ticklishbutterfly1-thumb.jpg"
    },
    {
        "username": "yellowcat935",
        "password": "davids",
        "name": {
            "first": "Ritthy",
            "last": "Gray"
        },
        "ssn": "501-59-9711",
        "dob": "1976-08-07T05:00:00.000Z",
        "hiredOn": "2003-09-24T05:00:00.000Z",
        "terminatedOn": null,
        "email": "ritthy.gray28@company.com",
        "phones": [
            {
                "type": "office",
                "number": "515-162-9260"
            },
            {
                "type": "cell",
                "number": "398-347-2370"
            }
        ],
        "address": {
            "street": "1946 Fairview St",
            "city": "Seymour",
            "state": "Oregon",
            "zip": "42724"
        },
        "roles": [
            "salaried",
            "part time",
            "consultant"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/yellowcat935.jpg",
        "thumbnail": "portraits/yellowcat935-thumb.jpg"
    },
    {
        "username": "ticklishbear822",
        "password": "monopoly",
        "name": {
            "first": "Jeremy",
            "last": "Stevens"
        },
        "ssn": "383-74-9736",
        "dob": "1970-06-27T05:00:00.000Z",
        "hiredOn": "2003-10-16T05:00:00.000Z",
        "terminatedOn": null,
        "email": "jeremy.stevens33@company.com",
        "phones": [
            {
                "type": "office",
                "number": "481-891-5537"
            },
            {
                "type": "cell",
                "number": "366-835-5412"
            }
        ],
        "address": {
            "street": "8004 Miller Ave",
            "city": "Duncanville",
            "state": "Iowa",
            "zip": "61012"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/ticklishbear822.jpg",
        "thumbnail": "portraits/ticklishbear822-thumb.jpg"
    },
    {
        "username": "ticklishbird555",
        "password": "showing",
        "name": {
            "first": "Danny",
            "last": "Garza"
        },
        "ssn": "641-45-9168",
        "dob": "1985-02-26T06:00:00.000Z",
        "hiredOn": "2013-08-02T05:00:00.000Z",
        "terminatedOn": null,
        "email": "danny.garza15@company.com",
        "phones": [
            {
                "type": "office",
                "number": "339-817-3591"
            },
            {
                "type": "home",
                "number": "731-282-5969"
            }
        ],
        "address": {
            "street": "7901 Adams St",
            "city": "Fresno",
            "state": "New York",
            "zip": "60350"
        },
        "roles": [
            "salaried",
            "part time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/ticklishbird555.jpg",
        "thumbnail": "portraits/ticklishbird555-thumb.jpg"
    },
    {
        "username": "crazyladybug288",
        "password": "flexible",
        "name": {
            "first": "Billy",
            "last": "Day"
        },
        "ssn": "676-69-4090",
        "dob": "1971-11-10T06:00:00.000Z",
        "hiredOn": "2003-05-27T05:00:00.000Z",
        "terminatedOn": null,
        "email": "billy.day28@company.com",
        "phones": [
            {
                "type": "office",
                "number": "836-287-5033"
            },
            {
                "type": "cell",
                "number": "397-471-4286"
            }
        ],
        "address": {
            "street": "7353 Poplar Dr",
            "city": "Cape Fear",
            "state": "Florida",
            "zip": "21960"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/crazyladybug288.jpg",
        "thumbnail": "portraits/crazyladybug288-thumb.jpg"
    },
    {
        "username": "whitetiger788",
        "password": "blue11",
        "name": {
            "first": "John",
            "last": "Smith"
        },
        "ssn": "471-25-5548",
        "dob": "1969-01-22T06:00:00.000Z",
        "hiredOn": "2005-02-15T06:00:00.000Z",
        "terminatedOn": null,
        "email": "eduardo.evans11@company.com",
        "phones": [
            {
                "type": "office",
                "number": "722-941-3054"
            },
            {
                "type": "cell",
                "number": "546-532-6709"
            }
        ],
        "address": {
            "street": "4569 Bollinger Rd",
            "city": "Rio Rancho",
            "state": "New Hampshire",
            "zip": "76595"
        },
        "roles": [
            "hourly",
            "part time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/whitetiger788.jpg",
        "thumbnail": "portraits/whitetiger788-thumb.jpg"
    },
    {
        "username": "crazygorilla336",
        "password": "ambrosia",
        "name": {
            "first": "Ida",
            "last": "Washington"
        },
        "ssn": "193-24-3701",
        "dob": "1970-01-27T06:00:00.000Z",
        "hiredOn": "2006-07-21T05:00:00.000Z",
        "terminatedOn": "2014-08-23T05:00:00.000Z",
        "email": "ida.washington26@company.com",
        "phones": [
            {
                "type": "office",
                "number": "200-143-8578"
            },
            {
                "type": "cell",
                "number": "381-658-8949"
            }
        ],
        "address": {
            "street": "4287 Mockingbird Hill",
            "city": "Richardson",
            "state": "Alaska",
            "zip": "31773"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/crazygorilla336.jpg",
        "thumbnail": "portraits/crazygorilla336-thumb.jpg"
    },
    {
        "username": "redladybug440",
        "password": "jayhawks",
        "name": {
            "first": "Caleb",
            "last": "Roberts"
        },
        "ssn": "231-49-4574",
        "dob": "1982-07-14T05:00:00.000Z",
        "hiredOn": "2013-07-25T05:00:00.000Z",
        "terminatedOn": null,
        "email": "caleb.roberts68@company.com",
        "phones": [
            {
                "type": "office",
                "number": "438-362-4715"
            },
            {
                "type": "home",
                "number": "875-350-5221"
            }
        ],
        "address": {
            "street": "9866 Prospect Rd",
            "city": "Helena",
            "state": "New York",
            "zip": "59451"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/redladybug440.jpg",
        "thumbnail": "portraits/redladybug440-thumb.jpg"
    },
    {
        "username": "brownmouse229",
        "password": "woody",
        "name": {
            "first": "William",
            "last": "Ferguson"
        },
        "ssn": "763-54-2087",
        "dob": "1977-07-22T05:00:00.000Z",
        "hiredOn": "2012-07-13T05:00:00.000Z",
        "terminatedOn": null,
        "email": "william.ferguson80@company.com",
        "phones": [
            {
                "type": "office",
                "number": "719-755-1713"
            },
            {
                "type": "cell",
                "number": "448-177-1376"
            }
        ],
        "address": {
            "street": "8773 Dogwood Ave",
            "city": "Saginaw",
            "state": "Delaware",
            "zip": "89333"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/brownmouse229.jpg",
        "thumbnail": "portraits/brownmouse229-thumb.jpg"
    },
    {
        "username": "silverrabbit923",
        "password": "arctic",
        "name": {
            "first": "Violet",
            "last": "Jackson"
        },
        "ssn": "650-58-9851",
        "dob": "1985-07-26T05:00:00.000Z",
        "hiredOn": "2013-10-03T05:00:00.000Z",
        "terminatedOn": null,
        "email": "violet.garrett26@company.com",
        "phones": [
            {
                "type": "office",
                "number": "837-318-1195"
            },
            {
                "type": "cell",
                "number": "763-286-4642"
            }
        ],
        "address": {
            "street": "8752 Frances Ct",
            "city": "Scurry",
            "state": "Rhode Island",
            "zip": "65101"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/silverrabbit923.jpg",
        "thumbnail": "portraits/silverrabbit923-thumb.jpg"
    },
    {
        "username": "tinysnake517",
        "password": "hammond",
        "name": {
            "first": "Adrian",
            "last": "Gibson"
        },
        "ssn": "425-62-1368",
        "dob": "1981-07-16T05:00:00.000Z",
        "hiredOn": "2010-05-13T05:00:00.000Z",
        "terminatedOn": null,
        "email": "adrian.gibson17@company.com",
        "phones": [
            {
                "type": "office",
                "number": "508-809-6806"
            },
            {
                "type": "cell",
                "number": "871-964-7356"
            }
        ],
        "address": {
            "street": "3464 Daisy Dr",
            "city": "Bakersfield",
            "state": "Virginia",
            "zip": "96113"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/tinysnake517.jpg",
        "thumbnail": "portraits/tinysnake517-thumb.jpg"
    },
    {
        "username": "greenpeacock556",
        "password": "fields",
        "name": {
            "first": "Frank",
            "last": "King"
        },
        "ssn": "511-48-4279",
        "dob": "1980-02-14T06:00:00.000Z",
        "hiredOn": "2001-03-21T06:00:00.000Z",
        "terminatedOn": "2010-10-10T05:00:00.000Z",
        "email": "frank.king99@company.com",
        "phones": [
            {
                "type": "office",
                "number": "535-843-8345"
            },
            {
                "type": "cell",
                "number": "805-340-9892"
            }
        ],
        "address": {
            "street": "6981 Hickory Creek Dr",
            "city": "Memphis",
            "state": "Montana",
            "zip": "57152"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/greenpeacock556.jpg",
        "thumbnail": "portraits/greenpeacock556-thumb.jpg"
    },
    {
        "username": "bigmouse194",
        "password": "archie",
        "name": {
            "first": "Jean",
            "last": "Gutierrez"
        },
        "ssn": "794-65-2926",
        "dob": "1967-05-12T05:00:00.000Z",
        "hiredOn": "2005-07-12T05:00:00.000Z",
        "terminatedOn": null,
        "email": "jean.gutierrez30@company.com",
        "phones": [
            {
                "type": "office",
                "number": "124-371-6366"
            },
            {
                "type": "home",
                "number": "443-181-9202"
            }
        ],
        "address": {
            "street": "7797 W Sherman Dr",
            "city": "Roseburg",
            "state": "Kansas",
            "zip": "39296"
        },
        "roles": [
            "hourly",
            "part time",
            "consultant"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/bigmouse194.jpg",
        "thumbnail": "portraits/bigmouse194-thumb.jpg"
    },
    {
        "username": "tinyduck113",
        "password": "stormy",
        "name": {
            "first": "Johnny",
            "last": "West"
        },
        "ssn": "708-49-3024",
        "dob": "1980-07-09T05:00:00.000Z",
        "hiredOn": "2003-11-17T06:00:00.000Z",
        "terminatedOn": null,
        "email": "johnny.west78@company.com",
        "phones": [
            {
                "type": "office",
                "number": "312-461-8762"
            },
            {
                "type": "cell",
                "number": "229-828-9192"
            }
        ],
        "address": {
            "street": "8484 Wheeler Ridge Dr",
            "city": "Boise",
            "state": "Kentucky",
            "zip": "58413"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/tinyduck113.jpg",
        "thumbnail": "portraits/tinyduck113-thumb.jpg"
    },
    {
        "username": "crazyduck410",
        "password": "redbull",
        "name": {
            "first": "Teresa",
            "last": "Hernandez"
        },
        "ssn": "507-41-5349",
        "dob": "1990-12-05T06:00:00.000Z",
        "hiredOn": "2010-11-10T06:00:00.000Z",
        "terminatedOn": null,
        "email": "teresa.hernandez71@company.com",
        "phones": [
            {
                "type": "office",
                "number": "334-737-3241"
            },
            {
                "type": "cell",
                "number": "350-170-9847"
            }
        ],
        "address": {
            "street": "7306 Eason Rd",
            "city": "Celina",
            "state": "Tennessee",
            "zip": "95242"
        },
        "roles": [
            "hourly",
            "part time",
            "consultant"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/crazyduck410.jpg",
        "thumbnail": "portraits/crazyduck410-thumb.jpg"
    },
    {
        "username": "bigsnake928",
        "password": "bowser",
        "name": {
            "first": "Alan",
            "last": "Perez"
        },
        "ssn": "451-20-4741",
        "dob": "1979-02-18T06:00:00.000Z",
        "hiredOn": "2000-06-13T05:00:00.000Z",
        "terminatedOn": null,
        "email": "alan.perez33@company.com",
        "phones": [
            {
                "type": "office",
                "number": "629-933-9576"
            },
            {
                "type": "cell",
                "number": "227-222-2602"
            }
        ],
        "address": {
            "street": "7601 Hillcrest Rd",
            "city": "Flowermound",
            "state": "Wisconsin",
            "zip": "66388"
        },
        "roles": [
            "salaried",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/bigsnake928.jpg",
        "thumbnail": "portraits/bigsnake928-thumb.jpg"
    },
    {
        "username": "blackbird181",
        "password": "scully",
        "name": {
            "first": "Mario",
            "last": "Griffin"
        },
        "ssn": "914-41-9308",
        "dob": "1988-08-23T05:00:00.000Z",
        "hiredOn": "2012-08-21T05:00:00.000Z",
        "terminatedOn": null,
        "email": "mario.griffin65@company.com",
        "phones": [
            {
                "type": "office",
                "number": "256-228-3608"
            },
            {
                "type": "cell",
                "number": "229-930-4344"
            }
        ],
        "address": {
            "street": "8423 N Stelling Rd",
            "city": "Greensboro",
            "state": "Colorado",
            "zip": "51663"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/blackbird181.jpg",
        "thumbnail": "portraits/blackbird181-thumb.jpg"
    },
    {
        "username": "orangefrog731",
        "password": "kidrock",
        "name": {
            "first": "Chad",
            "last": "Ferguson"
        },
        "ssn": "898-40-4322",
        "dob": "1979-08-02T05:00:00.000Z",
        "hiredOn": "2000-12-20T06:00:00.000Z",
        "terminatedOn": null,
        "email": "chad.ferguson47@company.com",
        "phones": [
            {
                "type": "office",
                "number": "247-572-9586"
            },
            {
                "type": "home",
                "number": "212-276-8495"
            }
        ],
        "address": {
            "street": "8046 Sunset St",
            "city": "Buffalo",
            "state": "Michigan",
            "zip": "37081"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/orangefrog731.jpg",
        "thumbnail": "portraits/orangefrog731-thumb.jpg"
    },
    {
        "username": "blackpanda397",
        "password": "brucelee",
        "name": {
            "first": "Ethel",
            "last": "Hopkins"
        },
        "ssn": "822-74-9326",
        "dob": "1986-09-21T05:00:00.000Z",
        "hiredOn": "2014-06-23T05:00:00.000Z",
        "terminatedOn": null,
        "email": "ethel.hopkins76@company.com",
        "phones": [
            {
                "type": "office",
                "number": "146-195-7126"
            },
            {
                "type": "cell",
                "number": "625-156-2374"
            }
        ],
        "address": {
            "street": "4322 Spring St",
            "city": "Coppell",
            "state": "Wyoming",
            "zip": "55744"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/blackpanda397.jpg",
        "thumbnail": "portraits/blackpanda397-thumb.jpg"
    },
    {
        "username": "tinymouse298",
        "password": "pepe",
        "name": {
            "first": "Bruce",
            "last": "Lopez"
        },
        "ssn": "928-43-6868",
        "dob": "1992-07-09T05:00:00.000Z",
        "hiredOn": "2014-04-06T05:00:00.000Z",
        "terminatedOn": null,
        "email": "bruce.lopez12@company.com",
        "phones": [
            {
                "type": "office",
                "number": "485-381-7518"
            },
            {
                "type": "home",
                "number": "772-325-7612"
            }
        ],
        "address": {
            "street": "3769 E Pecan St",
            "city": "New York",
            "state": "Illinois",
            "zip": "66847"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/tinymouse298.jpg",
        "thumbnail": "portraits/tinymouse298-thumb.jpg"
    },
    {
        "username": "greenswan929",
        "password": "carole",
        "name": {
            "first": "Dolores",
            "last": "Evans"
        },
        "ssn": "155-57-9715",
        "dob": "1966-12-28T06:00:00.000Z",
        "hiredOn": "1990-07-17T05:00:00.000Z",
        "terminatedOn": null,
        "email": "dolores.evans74@company.com",
        "phones": [
            {
                "type": "office",
                "number": "282-627-3932"
            },
            {
                "type": "cell",
                "number": "806-561-8616"
            }
        ],
        "address": {
            "street": "7859 Shady Ln Dr",
            "city": "Bueblo",
            "state": "West Virginia",
            "zip": "14785"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/greenswan929.jpg",
        "thumbnail": "portraits/greenswan929-thumb.jpg"
    },
    {
        "username": "brownpeacock222",
        "password": "colonel",
        "name": {
            "first": "Anita",
            "last": "Bradley"
        },
        "ssn": "524-30-1616",
        "dob": "1980-12-14T06:00:00.000Z",
        "hiredOn": "2010-04-20T05:00:00.000Z",
        "terminatedOn": null,
        "email": "anita.bradley39@company.com",
        "phones": [
            {
                "type": "office",
                "number": "781-778-4265"
            },
            {
                "type": "home",
                "number": "427-589-2860"
            }
        ],
        "address": {
            "street": "9009 Lakeview St",
            "city": "Ironville",
            "state": "Arizona",
            "zip": "42410"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/brownpeacock222.jpg",
        "thumbnail": "portraits/brownpeacock222-thumb.jpg"
    },
    {
        "username": "ticklishpanda298",
        "password": "boston1",
        "name": {
            "first": "Valerie",
            "last": "Silva"
        },
        "ssn": "142-49-9181",
        "dob": "1981-06-09T05:00:00.000Z",
        "hiredOn": "2005-05-27T05:00:00.000Z",
        "terminatedOn": null,
        "email": "valerie.silva64@company.com",
        "phones": [
            {
                "type": "office",
                "number": "588-681-7507"
            },
            {
                "type": "home",
                "number": "401-873-3048"
            }
        ],
        "address": {
            "street": "1006 N Stelling Rd",
            "city": "Arlington",
            "state": "South Dakota",
            "zip": "22109"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/ticklishpanda298.jpg",
        "thumbnail": "portraits/ticklishpanda298-thumb.jpg"
    },
    {
        "username": "greenleopard467",
        "password": "tonight",
        "name": {
            "first": "Addison",
            "last": "Davis"
        },
        "ssn": "897-83-5426",
        "dob": "1975-11-26T06:00:00.000Z",
        "hiredOn": "2009-11-15T06:00:00.000Z",
        "terminatedOn": null,
        "email": "addison.davis55@company.com",
        "phones": [
            {
                "type": "office",
                "number": "416-771-5370"
            },
            {
                "type": "home",
                "number": "143-469-6126"
            }
        ],
        "address": {
            "street": "7328 Oak Lawn Ave",
            "city": "Detroit",
            "state": "Maryland",
            "zip": "74909"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/greenleopard467.jpg",
        "thumbnail": "portraits/greenleopard467-thumb.jpg"
    },
    {
        "username": "heavywolf437",
        "password": "godsmack",
        "name": {
            "first": "Dana",
            "last": "Gilbert"
        },
        "ssn": "763-66-5881",
        "dob": "1970-06-05T05:00:00.000Z",
        "hiredOn": "2000-11-21T06:00:00.000Z",
        "terminatedOn": null,
        "email": "dana.gilbert19@company.com",
        "phones": [
            {
                "type": "office",
                "number": "397-146-8036"
            },
            {
                "type": "home",
                "number": "206-932-1054"
            }
        ],
        "address": {
            "street": "4423 Mcgowen St",
            "city": "Rio Rancho",
            "state": "Kentucky",
            "zip": "52292"
        },
        "roles": [
            "salaried",
            "part time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/heavywolf437.jpg",
        "thumbnail": "portraits/heavywolf437-thumb.jpg"
    },
    {
        "username": "yellowtiger366",
        "password": "walmart",
        "name": {
            "first": "Sofia",
            "last": "Simpson"
        },
        "ssn": "174-60-6090",
        "dob": "1974-10-10T05:00:00.000Z",
        "hiredOn": "2007-01-08T06:00:00.000Z",
        "terminatedOn": null,
        "email": "sofia.simpson23@company.com",
        "phones": [
            {
                "type": "office",
                "number": "231-488-8035"
            },
            {
                "type": "cell",
                "number": "412-140-4066"
            }
        ],
        "address": {
            "street": "4838 Prospect Rd",
            "city": "Fayetteville",
            "state": "California",
            "zip": "79319"
        },
        "roles": [
            "hourly",
            "part time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/yellowtiger366.jpg",
        "thumbnail": "portraits/yellowtiger366-thumb.jpg"
    },
    {
        "username": "silversnake507",
        "password": "qwert123",
        "name": {
            "first": "Marion",
            "last": "Stevens"
        },
        "ssn": "976-21-4161",
        "dob": "1984-08-24T05:00:00.000Z",
        "hiredOn": "2014-11-09T06:00:00.000Z",
        "terminatedOn": null,
        "email": "marion.stevens84@company.com",
        "phones": [
            {
                "type": "office",
                "number": "810-259-1828"
            },
            {
                "type": "cell",
                "number": "779-570-4882"
            }
        ],
        "address": {
            "street": "9278 N Stelling Rd",
            "city": "Akron",
            "state": "Georgia",
            "zip": "70363"
        },
        "roles": [
            "salaried",
            "full time",
            "consultant"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/silversnake507.jpg",
        "thumbnail": "portraits/silversnake507-thumb.jpg"
    },
    {
        "username": "bluepanda354",
        "password": "eighteen",
        "name": {
            "first": "Bruce",
            "last": "Jennings"
        },
        "ssn": "215-86-7327",
        "dob": "1977-10-13T05:00:00.000Z",
        "hiredOn": "2011-04-08T05:00:00.000Z",
        "terminatedOn": null,
        "email": "bruce.jennings39@company.com",
        "phones": [
            {
                "type": "office",
                "number": "715-383-8584"
            },
            {
                "type": "cell",
                "number": "371-779-9592"
            }
        ],
        "address": {
            "street": "5292 W Belt Line Rd",
            "city": "Bozeman",
            "state": "Arkansas",
            "zip": "51891"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Marketing",
        "gender": "male",
        "portrait": "portraits/bluepanda354.jpg",
        "thumbnail": "portraits/bluepanda354-thumb.jpg"
    },
    {
        "username": "smallelephant887",
        "password": "duffy",
        "name": {
            "first": "Jayden",
            "last": "Ellis"
        },
        "ssn": "203-69-5427",
        "dob": "1985-10-16T05:00:00.000Z",
        "hiredOn": "2010-05-15T05:00:00.000Z",
        "terminatedOn": null,
        "email": "jayden.ellis72@company.com",
        "phones": [
            {
                "type": "office",
                "number": "982-115-6203"
            },
            {
                "type": "cell",
                "number": "401-370-7133"
            }
        ],
        "address": {
            "street": "1232 Valley View Ln",
            "city": "Nampa",
            "state": "Montana",
            "zip": "10433"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/smallelephant887.jpg",
        "thumbnail": "portraits/smallelephant887-thumb.jpg"
    },
    {
        "username": "yellowdog110",
        "password": "gerald",
        "name": {
            "first": "Christine",
            "last": "Duncan"
        },
        "ssn": "192-17-4890",
        "dob": "1985-08-09T05:00:00.000Z",
        "hiredOn": "2013-02-09T06:00:00.000Z",
        "terminatedOn": null,
        "email": "christine.duncan51@company.com",
        "phones": [
            {
                "type": "office",
                "number": "697-548-9530"
            },
            {
                "type": "cell",
                "number": "501-966-3730"
            }
        ],
        "address": {
            "street": "5945 Groveland Terrace",
            "city": "Long Beach",
            "state": "Massachusetts",
            "zip": "11370"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/yellowdog110.jpg",
        "thumbnail": "portraits/yellowdog110-thumb.jpg"
    },
    {
        "username": "bluetiger546",
        "password": "shirley",
        "name": {
            "first": "Hugh",
            "last": "Gonzalez"
        },
        "ssn": "259-92-3643",
        "dob": "1965-07-18T05:00:00.000Z",
        "hiredOn": "2013-10-28T05:00:00.000Z",
        "terminatedOn": null,
        "email": "hugh.gonzalez84@company.com",
        "phones": [
            {
                "type": "office",
                "number": "496-473-1334"
            },
            {
                "type": "cell",
                "number": "446-963-4960"
            }
        ],
        "address": {
            "street": "7653 Bollinger Rd",
            "city": "Ironville",
            "state": "Colorado",
            "zip": "10603"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/bluetiger546.jpg",
        "thumbnail": "portraits/bluetiger546-thumb.jpg"
    },
    {
        "username": "orangegorilla363",
        "password": "guai",
        "name": {
            "first": "Oscar",
            "last": "Graham"
        },
        "ssn": "238-87-4269",
        "dob": "1992-06-19T05:00:00.000Z",
        "hiredOn": "2012-12-16T06:00:00.000Z",
        "terminatedOn": "2013-04-01T05:00:00.000Z",
        "email": "oscar.graham49@company.com",
        "phones": [
            {
                "type": "office",
                "number": "825-107-8912"
            },
            {
                "type": "cell",
                "number": "423-781-2687"
            }
        ],
        "address": {
            "street": "6485 E Pecan St",
            "city": "San Jose",
            "state": "Wyoming",
            "zip": "18410"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/orangegorilla363.jpg",
        "thumbnail": "portraits/orangegorilla363-thumb.jpg"
    },
    {
        "username": "goldenfrog222",
        "password": "licking",
        "name": {
            "first": "Rick",
            "last": "Steward"
        },
        "ssn": "525-90-1892",
        "dob": "1976-01-15T06:00:00.000Z",
        "hiredOn": "2006-11-04T06:00:00.000Z",
        "terminatedOn": null,
        "email": "rick.steward34@company.com",
        "phones": [
            {
                "type": "office",
                "number": "649-587-9135"
            },
            {
                "type": "home",
                "number": "941-914-9436"
            }
        ],
        "address": {
            "street": "1012 Cackson St",
            "city": "New York",
            "state": "Washington",
            "zip": "81852"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/goldenfrog222.jpg",
        "thumbnail": "portraits/goldenfrog222-thumb.jpg"
    },
    {
        "username": "greenostrich439",
        "password": "jjjjjjjj",
        "name": {
            "first": "Erin",
            "last": "Fields"
        },
        "ssn": "930-45-5968",
        "dob": "1985-01-06T06:00:00.000Z",
        "hiredOn": "2006-12-26T06:00:00.000Z",
        "terminatedOn": null,
        "email": "erin.fields25@company.com",
        "phones": [
            {
                "type": "office",
                "number": "502-113-6330"
            },
            {
                "type": "cell",
                "number": "449-232-5911"
            }
        ],
        "address": {
            "street": "5902 Cackson St",
            "city": "Iowa Park",
            "state": "Georgia",
            "zip": "12318"
        },
        "roles": [
            "hourly",
            "part time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/greenostrich439.jpg",
        "thumbnail": "portraits/greenostrich439-thumb.jpg"
    },
    {
        "username": "silverwolf910",
        "password": "females",
        "name": {
            "first": "Laurie",
            "last": "Mendoza"
        },
        "ssn": "248-87-5878",
        "dob": "1992-06-24T05:00:00.000Z",
        "hiredOn": "2012-01-24T06:00:00.000Z",
        "terminatedOn": null,
        "email": "laurie.mendoza32@company.com",
        "phones": [
            {
                "type": "office",
                "number": "336-423-8620"
            },
            {
                "type": "cell",
                "number": "977-896-2085"
            }
        ],
        "address": {
            "street": "1702 E North St",
            "city": "Akron",
            "state": "Tennessee",
            "zip": "40491"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/silverwolf910.jpg",
        "thumbnail": "portraits/silverwolf910-thumb.jpg"
    },
    {
        "username": "yellowpanda940",
        "password": "kirby",
        "name": {
            "first": "Jar",
            "last": "Stephens"
        },
        "ssn": "719-19-9375",
        "dob": "1968-01-21T06:00:00.000Z",
        "hiredOn": "2000-09-12T05:00:00.000Z",
        "terminatedOn": null,
        "email": "jar.stephens97@company.com",
        "phones": [
            {
                "type": "office",
                "number": "395-431-1017"
            },
            {
                "type": "cell",
                "number": "202-381-1445"
            }
        ],
        "address": {
            "street": "3018 College St",
            "city": "Modesto",
            "state": "Arkansas",
            "zip": "73473"
        },
        "roles": [
            "salaried",
            "part time",
            "consultant"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/yellowpanda940.jpg",
        "thumbnail": "portraits/yellowpanda940-thumb.jpg"
    },
    {
        "username": "redbutterfly240",
        "password": "giovanna",
        "name": {
            "first": "Willard",
            "last": "Fletcher"
        },
        "ssn": "290-42-6103",
        "dob": "1990-11-07T06:00:00.000Z",
        "hiredOn": "2011-05-25T05:00:00.000Z",
        "terminatedOn": null,
        "email": "willard.fletcher49@company.com",
        "phones": [
            {
                "type": "office",
                "number": "502-338-7450"
            },
            {
                "type": "cell",
                "number": "206-479-1143"
            }
        ],
        "address": {
            "street": "3053 Pockrus Page Rd",
            "city": "Ennis",
            "state": "Florida",
            "zip": "36901"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/redbutterfly240.jpg",
        "thumbnail": "portraits/redbutterfly240-thumb.jpg"
    },
    {
        "username": "purplemeercat491",
        "password": "stop",
        "name": {
            "first": "Francisco",
            "last": "Jackson"
        },
        "ssn": "210-35-1042",
        "dob": "1977-12-28T06:00:00.000Z",
        "hiredOn": "2010-08-11T05:00:00.000Z",
        "terminatedOn": null,
        "email": "francisco.fuller20@company.com",
        "phones": [
            {
                "type": "office",
                "number": "403-793-1023"
            },
            {
                "type": "cell",
                "number": "708-256-4840"
            }
        ],
        "address": {
            "street": "7860 W Belt Line Rd",
            "city": "Spokane",
            "state": "Vermont",
            "zip": "33554"
        },
        "roles": [
            "hourly",
            "part time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/purplemeercat491.jpg",
        "thumbnail": "portraits/purplemeercat491-thumb.jpg"
    },
    {
        "username": "heavyladybug740",
        "password": "lesbean",
        "name": {
            "first": "Jordan",
            "last": "Fox"
        },
        "ssn": "101-22-4999",
        "dob": "1974-02-08T05:00:00.000Z",
        "hiredOn": "1994-08-03T05:00:00.000Z",
        "terminatedOn": null,
        "email": "jordan.fox20@company.com",
        "phones": [
            {
                "type": "office",
                "number": "679-333-9533"
            },
            {
                "type": "cell",
                "number": "825-905-4480"
            }
        ],
        "address": {
            "street": "1533 College St",
            "city": "Wichita Falls",
            "state": "Washington",
            "zip": "82600"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "male",
        "portrait": "portraits/heavyladybug740.jpg",
        "thumbnail": "portraits/heavyladybug740-thumb.jpg"
    },
    {
        "username": "yellowwolf751",
        "password": "chevy1",
        "name": {
            "first": "Cherly",
            "last": "Stone"
        },
        "ssn": "417-71-9261",
        "dob": "1987-12-06T06:00:00.000Z",
        "hiredOn": "2013-01-16T06:00:00.000Z",
        "terminatedOn": null,
        "email": "cherly.stone88@company.com",
        "phones": [
            {
                "type": "office",
                "number": "516-521-1989"
            },
            {
                "type": "cell",
                "number": "339-446-4908"
            }
        ],
        "address": {
            "street": "2771 Nowlin Rd",
            "city": "Altoona",
            "state": "Vermont",
            "zip": "16764"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/yellowwolf751.jpg",
        "thumbnail": "portraits/yellowwolf751-thumb.jpg"
    },
    {
        "username": "whitekoala266",
        "password": "abcdefg",
        "name": {
            "first": "Raymond",
            "last": "Cox"
        },
        "ssn": "663-71-1383",
        "dob": "1965-08-03T05:00:00.000Z",
        "hiredOn": "2001-12-27T06:00:00.000Z",
        "terminatedOn": null,
        "email": "raymond.cox19@company.com",
        "phones": [
            {
                "type": "office",
                "number": "137-314-5474"
            },
            {
                "type": "home",
                "number": "469-793-7760"
            }
        ],
        "address": {
            "street": "8004 Karen Dr",
            "city": "Bernalillo",
            "state": "Nevada",
            "zip": "12206"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "male",
        "portrait": "portraits/whitekoala266.jpg",
        "thumbnail": "portraits/whitekoala266-thumb.jpg"
    },
    {
        "username": "silvermouse687",
        "password": "passwor",
        "name": {
            "first": "Julie",
            "last": "Kennedy"
        },
        "ssn": "935-53-6295",
        "dob": "1992-11-09T06:00:00.000Z",
        "hiredOn": "2013-06-04T05:00:00.000Z",
        "terminatedOn": null,
        "email": "julie.kennedy76@company.com",
        "phones": [
            {
                "type": "office",
                "number": "215-320-9431"
            },
            {
                "type": "cell",
                "number": "149-389-9860"
            }
        ],
        "address": {
            "street": "5458 Elgin St",
            "city": "Ironville",
            "state": "Washington",
            "zip": "80109"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/silvermouse687.jpg",
        "thumbnail": "portraits/silvermouse687-thumb.jpg"
    },
    {
        "username": "blackbird733",
        "password": "roadrunn",
        "name": {
            "first": "Marvin",
            "last": "Mendoza"
        },
        "ssn": "132-14-9468",
        "dob": "1968-03-20T05:00:00.000Z",
        "hiredOn": "2002-05-24T05:00:00.000Z",
        "terminatedOn": "2014-12-04T06:00:00.000Z",
        "email": "marvin.mendoza63@company.com",
        "phones": [
            {
                "type": "office",
                "number": "283-344-9964"
            },
            {
                "type": "cell",
                "number": "448-708-7720"
            }
        ],
        "address": {
            "street": "4783 Bollinger Rd",
            "city": "Evansville",
            "state": "Tennessee",
            "zip": "22864"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/blackbird733.jpg",
        "thumbnail": "portraits/blackbird733-thumb.jpg"
    },
    {
        "username": "orangeostrich499",
        "password": "admin",
        "name": {
            "first": "Adrian",
            "last": "Newman"
        },
        "ssn": "694-44-5755",
        "dob": "1992-09-21T05:00:00.000Z",
        "hiredOn": "2012-10-05T05:00:00.000Z",
        "terminatedOn": null,
        "email": "adrian.newman12@company.com",
        "phones": [
            {
                "type": "office",
                "number": "170-580-5618"
            },
            {
                "type": "cell",
                "number": "582-604-6812"
            }
        ],
        "address": {
            "street": "5031 Wheeler Ridge Dr",
            "city": "Cape Fear",
            "state": "Arkansas",
            "zip": "63417"
        },
        "roles": [
            "salaried",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/orangeostrich499.jpg",
        "thumbnail": "portraits/orangeostrich499-thumb.jpg"
    },
    {
        "username": "blackpeacock213",
        "password": "adam",
        "name": {
            "first": "Caleb",
            "last": "Payne"
        },
        "ssn": "429-30-8902",
        "dob": "1967-10-10T05:00:00.000Z",
        "hiredOn": "1998-10-26T06:00:00.000Z",
        "terminatedOn": null,
        "email": "caleb.payne82@company.com",
        "phones": [
            {
                "type": "office",
                "number": "600-510-4633"
            },
            {
                "type": "cell",
                "number": "237-394-9712"
            }
        ],
        "address": {
            "street": "3852 W Belt Line Rd",
            "city": "Addison",
            "state": "Kansas",
            "zip": "11974"
        },
        "roles": [
            "salaried",
            "part time",
            "contractor"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/blackpeacock213.jpg",
        "thumbnail": "portraits/blackpeacock213-thumb.jpg"
    },
    {
        "username": "orangebird478",
        "password": "tiao",
        "name": {
            "first": "Claude",
            "last": "Reynolds"
        },
        "ssn": "975-65-5176",
        "dob": "1968-12-10T06:00:00.000Z",
        "hiredOn": "2003-02-18T06:00:00.000Z",
        "terminatedOn": null,
        "email": "claude.reynolds96@company.com",
        "phones": [
            {
                "type": "office",
                "number": "473-289-7149"
            },
            {
                "type": "home",
                "number": "824-477-4534"
            }
        ],
        "address": {
            "street": "5427 Mockingbird Hill",
            "city": "Charlotte",
            "state": "Illinois",
            "zip": "82867"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/orangebird478.jpg",
        "thumbnail": "portraits/orangebird478-thumb.jpg"
    },
    {
        "username": "organicbear74",
        "password": "peekaboo",
        "name": {
            "first": "Debra",
            "last": "Graham"
        },
        "ssn": "865-63-3819",
        "dob": "1975-03-15T05:00:00.000Z",
        "hiredOn": "2011-06-11T05:00:00.000Z",
        "terminatedOn": null,
        "email": "debra.graham23@company.com",
        "phones": [
            {
                "type": "office",
                "number": "884-907-7043"
            },
            {
                "type": "cell",
                "number": "211-858-5744"
            }
        ],
        "address": {
            "street": "3754 Paddock Way",
            "city": "Frisco",
            "state": "Colorado",
            "zip": "11862"
        },
        "roles": [
            "salaried",
            "employee",
            "part time"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/organicbear74.jpg",
        "thumbnail": "portraits/organicbear74-thumb.jpg"
    },
    {
        "username": "smallfrog632",
        "password": "fetish",
        "name": {
            "first": "Kurt",
            "last": "Lee"
        },
        "ssn": "497-12-7480",
        "dob": "1975-12-15T06:00:00.000Z",
        "hiredOn": "2006-03-14T06:00:00.000Z",
        "terminatedOn": null,
        "email": "kurt.lee70@company.com",
        "phones": [
            {
                "type": "office",
                "number": "132-648-9127"
            },
            {
                "type": "cell",
                "number": "106-162-9940"
            }
        ],
        "address": {
            "street": "5434 Washington Ave",
            "city": "Henderson",
            "state": "South Carolina",
            "zip": "79836"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/smallfrog632.jpg",
        "thumbnail": "portraits/smallfrog632-thumb.jpg"
    },
    {
        "username": "tinykoala298",
        "password": "marian",
        "name": {
            "first": "Noelle",
            "last": "Smith"
        },
        "ssn": "773-65-4386",
        "dob": "1975-10-07T05:00:00.000Z",
        "hiredOn": "2010-06-18T05:00:00.000Z",
        "terminatedOn": null,
        "email": "noelle.jensen55@company.com",
        "phones": [
            {
                "type": "office",
                "number": "296-963-5474"
            },
            {
                "type": "cell",
                "number": "437-306-3417"
            }
        ],
        "address": {
            "street": "5610 W Dallas St",
            "city": "Las Vegas",
            "state": "Washington",
            "zip": "99608"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/tinykoala298.jpg",
        "thumbnail": "portraits/tinykoala298-thumb.jpg"
    },
    {
        "username": "redwolf207",
        "password": "solitude",
        "name": {
            "first": "Herminia",
            "last": "Kuhn"
        },
        "ssn": "617-78-2346",
        "dob": "1975-04-28T05:00:00.000Z",
        "hiredOn": "2009-05-24T05:00:00.000Z",
        "terminatedOn": null,
        "email": "herminia.kuhn17@company.com",
        "phones": [
            {
                "type": "office",
                "number": "220-707-2618"
            },
            {
                "type": "home",
                "number": "823-808-3306"
            }
        ],
        "address": {
            "street": "9197 N Stelling Rd",
            "city": "Akron",
            "state": "New Mexico",
            "zip": "49632"
        },
        "roles": [
            "salaried",
            "part time",
            "contractor"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/redwolf207.jpg",
        "thumbnail": "portraits/redwolf207-thumb.jpg"
    },
    {
        "username": "goldenkoala942",
        "password": "peaches",
        "name": {
            "first": "Marlene",
            "last": "Fuller"
        },
        "ssn": "570-43-4276",
        "dob": "1979-09-09T05:00:00.000Z",
        "hiredOn": "2007-03-03T06:00:00.000Z",
        "terminatedOn": null,
        "email": "marlene.fuller32@company.com",
        "phones": [
            {
                "type": "office",
                "number": "276-900-6352"
            },
            {
                "type": "cell",
                "number": "232-713-2109"
            }
        ],
        "address": {
            "street": "5995 Hogan St",
            "city": "Flowermound",
            "state": "Arizona",
            "zip": "45221"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/goldenkoala942.jpg",
        "thumbnail": "portraits/goldenkoala942-thumb.jpg"
    },
    {
        "username": "lazymeercat712",
        "password": "pompey",
        "name": {
            "first": "Anna",
            "last": "Byrd"
        },
        "ssn": "764-55-7466",
        "dob": "1980-07-13T05:00:00.000Z",
        "hiredOn": "2004-06-28T05:00:00.000Z",
        "terminatedOn": null,
        "email": "anna.byrd35@company.com",
        "phones": [
            {
                "type": "office",
                "number": "588-436-1276"
            },
            {
                "type": "cell",
                "number": "717-780-1583"
            }
        ],
        "address": {
            "street": "1640 Royal Ln",
            "city": "Cedar Hill",
            "state": "New Jersey",
            "zip": "82919"
        },
        "roles": [
            "salaried",
            "part time",
            "contractor"
        ],
        "department": "Human Resources",
        "gender": "female",
        "portrait": "portraits/lazymeercat712.jpg",
        "thumbnail": "portraits/lazymeercat712-thumb.jpg"
    },
    {
        "username": "purplepanda527",
        "password": "cocacola",
        "name": {
            "first": "Gail",
            "last": "Holland"
        },
        "ssn": "823-44-4175",
        "dob": "1972-06-26T05:00:00.000Z",
        "hiredOn": "1996-07-14T05:00:00.000Z",
        "terminatedOn": null,
        "email": "gail.holland86@company.com",
        "phones": [
            {
                "type": "office",
                "number": "559-236-8495"
            },
            {
                "type": "cell",
                "number": "639-765-8551"
            }
        ],
        "address": {
            "street": "9537 W Belt Line Rd",
            "city": "Tacoma",
            "state": "Georgia",
            "zip": "90209"
        },
        "roles": [
            "salaried",
            "part time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/purplepanda527.jpg",
        "thumbnail": "portraits/purplepanda527-thumb.jpg"
    },
    {
        "username": "ticklishlion619",
        "password": "geronimo",
        "name": {
            "first": "Alfred",
            "last": "Ford"
        },
        "ssn": "863-30-6761",
        "dob": "1974-09-01T05:00:00.000Z",
        "hiredOn": "2007-08-10T05:00:00.000Z",
        "terminatedOn": null,
        "email": "alfred.ford66@company.com",
        "phones": [
            {
                "type": "office",
                "number": "875-831-8488"
            },
            {
                "type": "cell",
                "number": "832-492-3211"
            }
        ],
        "address": {
            "street": "2874 Woodland St",
            "city": "Provo",
            "state": "Illinois",
            "zip": "63907"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/ticklishlion619.jpg",
        "thumbnail": "portraits/ticklishlion619-thumb.jpg"
    },
    {
        "username": "goldenbird725",
        "password": "pyramid",
        "name": {
            "first": "Jesus",
            "last": "Miller"
        },
        "ssn": "264-76-4495",
        "dob": "1987-09-07T05:00:00.000Z",
        "hiredOn": "2013-08-15T05:00:00.000Z",
        "terminatedOn": null,
        "email": "jesus.miller16@company.com",
        "phones": [
            {
                "type": "office",
                "number": "470-998-3892"
            },
            {
                "type": "home",
                "number": "693-601-3471"
            }
        ],
        "address": {
            "street": "1543 Locust Rd",
            "city": "Ironville",
            "state": "Michigan",
            "zip": "83919"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/goldenbird725.jpg",
        "thumbnail": "portraits/goldenbird725-thumb.jpg"
    },
    {
        "username": "whitebutterfly382",
        "password": "abigail",
        "name": {
            "first": "Lewis",
            "last": "Smith"
        },
        "ssn": "638-57-1396",
        "dob": "1972-10-15T05:00:00.000Z",
        "hiredOn": "2014-09-19T05:00:00.000Z",
        "terminatedOn": null,
        "email": "lewis.harris88@company.com",
        "phones": [
            {
                "type": "office",
                "number": "424-974-5764"
            },
            {
                "type": "cell",
                "number": "922-776-3545"
            }
        ],
        "address": {
            "street": "7251 Walnut Hill Ln",
            "city": "Scurry",
            "state": "Oregon",
            "zip": "36713"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/whitebutterfly382.jpg",
        "thumbnail": "portraits/whitebutterfly382-thumb.jpg"
    },
    {
        "username": "heavysnake634",
        "password": "feet",
        "name": {
            "first": "Ralph",
            "last": "Rogers"
        },
        "ssn": "446-15-1994",
        "dob": "1976-08-06T05:00:00.000Z",
        "hiredOn": "2004-09-05T05:00:00.000Z",
        "terminatedOn": "2011-01-20T06:00:00.000Z",
        "email": "ralph.rogers82@company.com",
        "phones": [
            {
                "type": "office",
                "number": "822-649-3585"
            },
            {
                "type": "home",
                "number": "717-864-4681"
            }
        ],
        "address": {
            "street": "1789 E Pecan St",
            "city": "Billings",
            "state": "Oregon",
            "zip": "72485"
        },
        "roles": [
            "hourly",
            "full time",
            "contractor"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/heavysnake634.jpg",
        "thumbnail": "portraits/heavysnake634-thumb.jpg"
    },
    {
        "username": "blackrabbit3",
        "password": "nascar",
        "name": {
            "first": "Joyce",
            "last": "Sanders"
        },
        "ssn": "322-55-9315",
        "dob": "1973-07-19T05:00:00.000Z",
        "hiredOn": "1994-03-09T06:00:00.000Z",
        "terminatedOn": "2010-09-17T05:00:00.000Z",
        "email": "joyce.sanders18@company.com",
        "phones": [
            {
                "type": "office",
                "number": "624-778-9078"
            },
            {
                "type": "cell",
                "number": "575-103-8102"
            }
        ],
        "address": {
            "street": "9367 Sunset St",
            "city": "Fort Collins",
            "state": "New Jersey",
            "zip": "80069"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Marketing",
        "gender": "female",
        "portrait": "portraits/blackrabbit3.jpg",
        "thumbnail": "portraits/blackrabbit3-thumb.jpg"
    },
    {
        "username": "goldenbutterfly797",
        "password": "volleyba",
        "name": {
            "first": "Frank",
            "last": "Davidson"
        },
        "ssn": "981-63-8784",
        "dob": "1979-09-07T05:00:00.000Z",
        "hiredOn": "2013-10-19T05:00:00.000Z",
        "terminatedOn": null,
        "email": "frank.davidson56@company.com",
        "phones": [
            {
                "type": "office",
                "number": "754-580-8185"
            },
            {
                "type": "cell",
                "number": "115-924-8821"
            }
        ],
        "address": {
            "street": "4606 Eason Rd",
            "city": "Grants Pass",
            "state": "South Dakota",
            "zip": "98742"
        },
        "roles": [
            "hourly",
            "part time",
            "contractor"
        ],
        "department": "Human Resources",
        "gender": "male",
        "portrait": "portraits/goldenbutterfly797.jpg",
        "thumbnail": "portraits/goldenbutterfly797-thumb.jpg"
    },
    {
        "username": "silverbird464",
        "password": "lotus",
        "name": {
            "first": "Dean",
            "last": "Bradley"
        },
        "ssn": "380-81-9874",
        "dob": "1974-04-01T05:00:00.000Z",
        "hiredOn": "2005-03-06T06:00:00.000Z",
        "terminatedOn": null,
        "email": "dean.bradley13@company.com",
        "phones": [
            {
                "type": "office",
                "number": "147-490-5928"
            },
            {
                "type": "cell",
                "number": "222-975-7319"
            }
        ],
        "address": {
            "street": "3020 Lakeshore Rd",
            "city": "Detroit",
            "state": "New Mexico",
            "zip": "59742"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/silverbird464.jpg",
        "thumbnail": "portraits/silverbird464-thumb.jpg"
    },
    {
        "username": "blackdog47",
        "password": "sentnece",
        "name": {
            "first": "Georgia",
            "last": "Douglas"
        },
        "ssn": "601-61-2114",
        "dob": "1992-05-09T05:00:00.000Z",
        "hiredOn": "2013-03-03T06:00:00.000Z",
        "terminatedOn": null,
        "email": "georgia.douglas28@company.com",
        "phones": [
            {
                "type": "office",
                "number": "298-750-5135"
            },
            {
                "type": "cell",
                "number": "422-510-6475"
            }
        ],
        "address": {
            "street": "4677 Ranchview Dr",
            "city": "Columbus",
            "state": "North Dakota",
            "zip": "16002"
        },
        "roles": [
            "hourly",
            "full time",
            "consultant"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/blackdog47.jpg",
        "thumbnail": "portraits/blackdog47-thumb.jpg"
    },
    {
        "username": "goldenpeacock175",
        "password": "nomore",
        "name": {
            "first": "Steven",
            "last": "Vasquez"
        },
        "ssn": "703-83-8585",
        "dob": "1982-01-05T06:00:00.000Z",
        "hiredOn": "2002-01-20T06:00:00.000Z",
        "terminatedOn": null,
        "email": "steven.vasquez91@company.com",
        "phones": [
            {
                "type": "office",
                "number": "911-246-2449"
            },
            {
                "type": "cell",
                "number": "782-269-2330"
            }
        ],
        "address": {
            "street": "3199 Country Club Rd",
            "city": "Fremont",
            "state": "Virginia",
            "zip": "94390"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Marketing",
        "gender": "male",
        "portrait": "portraits/goldenpeacock175.jpg",
        "thumbnail": "portraits/goldenpeacock175-thumb.jpg"
    },
    {
        "username": "smallwolf576",
        "password": "hang",
        "name": {
            "first": "Christy",
            "last": "Bell"
        },
        "ssn": "467-35-3485",
        "dob": "1983-06-10T05:00:00.000Z",
        "hiredOn": "2006-01-18T06:00:00.000Z",
        "terminatedOn": null,
        "email": "christy.bell39@company.com",
        "phones": [
            {
                "type": "office",
                "number": "555-316-9657"
            },
            {
                "type": "home",
                "number": "138-427-4789"
            }
        ],
        "address": {
            "street": "6055 Royal Ln",
            "city": "Fresno",
            "state": "New Hampshire",
            "zip": "12031"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "female",
        "portrait": "portraits/smallwolf576.jpg",
        "thumbnail": "portraits/smallwolf576-thumb.jpg"
    },
    {
        "username": "bluemeercat298",
        "password": "xanadu",
        "name": {
            "first": "Herbert",
            "last": "Wells"
        },
        "ssn": "432-28-2900",
        "dob": "1968-03-01T06:00:00.000Z",
        "hiredOn": "2011-04-13T05:00:00.000Z",
        "terminatedOn": null,
        "email": "herbert.wells85@company.com",
        "phones": [
            {
                "type": "office",
                "number": "429-427-5388"
            },
            {
                "type": "cell",
                "number": "447-487-6709"
            }
        ],
        "address": {
            "street": "7957 Wheeler Ridge Dr",
            "city": "Buffalo",
            "state": "Tennessee",
            "zip": "12974"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/bluemeercat298.jpg",
        "thumbnail": "portraits/bluemeercat298-thumb.jpg"
    },
    {
        "username": "yellowleopard565",
        "password": "goodbye",
        "name": {
            "first": "Nelson",
            "last": "Byrd"
        },
        "ssn": "733-68-9898",
        "dob": "1978-06-27T05:00:00.000Z",
        "hiredOn": "2001-09-11T05:00:00.000Z",
        "terminatedOn": null,
        "email": "nelson.byrd85@company.com",
        "phones": [
            {
                "type": "office",
                "number": "439-787-7054"
            },
            {
                "type": "home",
                "number": "762-977-4795"
            }
        ],
        "address": {
            "street": "4771 Homestead Rd",
            "city": "Greeley",
            "state": "Massachusetts",
            "zip": "40813"
        },
        "roles": [
            "salaried",
            "full time",
            "employee"
        ],
        "department": "Sales",
        "gender": "male",
        "portrait": "portraits/yellowleopard565.jpg",
        "thumbnail": "portraits/yellowleopard565-thumb.jpg"
    },
    {
        "username": "redtiger449",
        "password": "jerome",
        "name": {
            "first": "Morris",
            "last": "Moreno"
        },
        "ssn": "283-90-9368",
        "dob": "1972-04-25T06:00:00.000Z",
        "hiredOn": "2006-05-03T05:00:00.000Z",
        "terminatedOn": null,
        "email": "morris.moreno77@company.com",
        "phones": [
            {
                "type": "office",
                "number": "432-353-4425"
            },
            {
                "type": "cell",
                "number": "607-827-7813"
            }
        ],
        "address": {
            "street": "9979 Poplar Dr",
            "city": "Salt Lake City",
            "state": "Maine",
            "zip": "46924"
        },
        "roles": [
            "hourly",
            "full time",
            "employee"
        ],
        "department": "Accounting",
        "gender": "male",
        "portrait": "portraits/redtiger449.jpg",
        "thumbnail": "portraits/redtiger449-thumb.jpg"
    },
    {
        "username": "greengoose892",
        "password": "design",
        "name": {
            "first": "Jane",
            "last": "Hill"
        },
        "ssn": "523-74-4162",
        "dob": "1982-08-10T05:00:00.000Z",
        "hiredOn": "2002-04-26T05:00:00.000Z",
        "terminatedOn": null,
        "email": "jane.hill56@company.com",
        "phones": [
            {
                "type": "office",
                "number": "700-273-4086"
            },
            {
                "type": "home",
                "number": "709-194-7288"
            }
        ],
        "address": {
            "street": "2523 Taylor St",
            "city": "Bozeman",
            "state": "Maine",
            "zip": "52829"
        },
        "roles": [
            "salaried",
            "full time",
            "contractor"
        ],
        "department": "Accounting",
        "gender": "female",
        "portrait": "portraits/greengoose892.jpg",
        "thumbnail": "portraits/greengoose892-thumb.jpg"
    }
];

module.exports = { Employee };