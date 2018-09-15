declare namespace Server {

    /*

    GENERAL:
    userIds will be prefixes with 'u'
    eventIds will be prefixed with 'e'
    neither should be publicly exposed
    */

    export type Location = {
        city: string;
        state: string;
    }

    export type User = {
        id: string;
        name: string;
        username: string;
    }

    export type TimeRange = {
        startTime: string;
        endTime: string;
    }

    // /auth/login
    export type AuthRequest = {
        username: string;
        password: string;
    }

    export type AuthRequestResponse = {
        userId: string;
        userIsAuthenticated: boolean;
    }

    // /auth/register
    export type RegisterUserRequest = {
        username: string;
        password: string;
        name: string;
        bio: string;
        location: Location;
    }

    export type RegisterUserResponse = {
        didRegister: boolean;
        id: string;
    }

    // data/user/profile
    export type UserProfileRequest = {
        id: string;
    }

    export type UserProfile = {
        id: string;
        username: string;
        name: string;
        bio: string;
        location: Location;
        dateJoined: string;
        eventsAttended: Event[];
        upcomingEvents: Event[];
        organizedEvents: Event[];
    }

    // data/event/info
    export type GetEventInformationRequest = {
        eventId: string;
    }

    export type Event = {
        eventId: string;
        name: string;
        date: string;
        time: TimeRange;
        location: Location;
        details: string;
        attendees: User[];
        organizer: User;
    }

    // data/event/create
    export type CreateEventRequest = {
        name: string;
        time: TimeRange;
        location: Location;
        details: string;
        organizerId: string;
    }

    export type CreateEventResponse = {
        eventId: string;
    }

}