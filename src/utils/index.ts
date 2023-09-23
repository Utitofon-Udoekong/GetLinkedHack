export interface ContactForm {
    email: String;
    phone_number: String;
    first_name: String;
    message: any;
}
export interface RegisterForm {
    email: String
    phone_number: String
    team_name: String
    group_size: Number
    project_topic: String;
    category: Number
    privacy_poclicy_accepted: Boolean
}
export interface Categories {
    id: Number
    name: String
}

export interface Timeline {
    left: {
        title: String;
        sub?: String;
    },
    num: Number,
    right: {
        title: String;
        sub?: String;
    },
}
export interface MobileTimeline {
    title: String;
    sub?: String;
    num: Number,
}