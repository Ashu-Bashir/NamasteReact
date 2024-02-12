import React from "react"
import ReactDOM from "react-dom/client"
       
/** Planning for the Food Villa App 
   1. Header
        - Logo on left
        - Nav items on right
    2. Body
        - Search bar
        - Restaurant list (will be having many cards)
        - Card
           - image
           - name
           - cuisines
           - rating
   3. Footer
   */


const restaurants = {
    "restaurants": [
        {
            "info": {
                "id": "8620",
                "name": "Biryani Blues",
                "cloudinaryImageId": "49028ad4dc2a8183bbedae4504f49b75",
                "locality": "Connaught Place",
                "areaName": "Connaught Place",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "Hyderabadi",
                    "Lucknowi",
                    "Kebabs",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "13813",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "promoted": true,
                "adTrackingId": "cid=11114865~p=1~eid=0000018d-823b-3865-0241-e2b10070010b~srvts=1707286935653~45995",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "28 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-08 02:45:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "description": "",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=8620",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "365634",
                "name": "Wow! Momo",
                "cloudinaryImageId": "5a148e63e9c54942e37627da1aa156be",
                "locality": "Ajmeri Gate",
                "areaName": "Ajmeri Gate",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Tibetan",
                    "Healthy Food",
                    "Asian",
                    "Chinese",
                    "Snacks",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "parentId": "1776",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "26 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-08 02:45:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textExtendedBadges": {},
                        "textBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹499",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=365634",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "762613",
                "name": "KFC",
                "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                "locality": "Netaji Subhash Marg",
                "areaName": "Dariyaganj",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.1,
                "parentId": "547",
                "avgRatingString": "4.1",
                "totalRatingsString": "50+",
                "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "21 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-07 22:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=762613",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "253765",
                "name": "McDonald's",
                "cloudinaryImageId": "ecd32b841549ce6bfd993260a2086c1f",
                "locality": "Kumar Theatre",
                "areaName": "Chandni Chowk",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "American"
                ],
                "avgRating": 4.3,
                "parentId": "630",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "24 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-07 23:58:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=253765",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "16418",
                "name": "Subway",
                "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                "locality": "M Block",
                "areaName": "Connaught Place",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.2,
                "parentId": "2",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "promoted": true,
                "adTrackingId": "cid=11024783~p=2~eid=0000018d-823b-3865-0241-e2b200700215~srvts=1707286935653~45995",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 4.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "26 mins",
                    "lastMileTravelString": "4.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-07 23:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "description": "",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "imageBased": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=16418",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "38925",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
                "locality": "Netaji Subhash Marg",
                "areaName": "Daryaganj",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "2456",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 25,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-08 01:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=38925",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
        {
            "info": {
                "id": "659837",
                "name": "Bakingo",
                "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
                "locality": "Krishna Market",
                "areaName": "Karol Bagh",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                ],
                "avgRating": 4.5,
                "parentId": "3818",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "29 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-02-08 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "FREE ITEM"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {},
            "cta": {
                "link": "swiggy://menu?restaurant_id=659837",
                "text": "RESTAURANT_MENU",
                "type": "DEEPLINK"
            }
        },
    ]
}


const RestaurantCard = (props) =>{
    console.log("props" , props)
    const {cuisines , name , avgRating , cloudinaryImageId } = props
    return (
        <div className="card">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}/>  
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        </div>
    )
}

   const Header = () => {
        return (
            <div className="header" >
                <img src= "https://png.pngtree.com/templates/20180809/restaurant-logos-png-png_25706.jpg" alt="logo image" /> 
                <ul className="nav-items" >
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Home</li>
                        <li>Cart</li>

                </ul>
            </div>   
        )
   }

   const Body = () =>{
    return (
        <div className="restaurant-list">
            {restaurants.restaurants.map((restaurant)=>{
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            })}
        </div>
    )
   }

   const Footer = () => {
    return (
        <h4>Footer</h4>
    )
   }


   const AppLayout = () => {
        return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
        )
   }
        

        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(<AppLayout/>)