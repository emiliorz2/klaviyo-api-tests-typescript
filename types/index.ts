


export type Profile = {
    id: string,
    attributes: {
        location: {
            address1: string,
            country: string,
            region: string,
            zip: string
        },
        properties: {
            fav_category: string,
            fav_color: string
        },
        email: string,
        phone_number: string,
        first_name: string,
        last_name: string,
        external_id: string
    }
}

export type TempProfile = {
    email: string,
    phone_number: string,
    first_name: string,
    last_name: string,
    address: string,
    country: string,
    region: string,
    zip: string,
    fav_category: string,
    fav_color: string
}
