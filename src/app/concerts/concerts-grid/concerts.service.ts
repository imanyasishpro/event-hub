import { Injectable } from "@angular/core";
import { ConcertModel } from "./concerts-concert/concert.model";

@Injectable({
    providedIn: 'root'
})

export class ConcertsService {
    private concerts: ConcertModel[] = [
        {
            concertId: 'c1',
            title: 'Test 1',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: 'c2',
            title: 'Avatar',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: 'c3',
            title: 'Avengers',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: 'c4',
            title: 'Black Panther',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: 'c5',
            title: 'Spider Man',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: 'c6',
            title: 'Dora',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: 'c7',
            title: 'Test',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        }
    ]

    isSelectedConcert:boolean = false;

    getConcert(id: string) {
        this.isSelectedConcert = true;
        return this.concerts.find((concert) => concert.concertId === id);
    }

    getConcerts() {
        return this.concerts;
    }

    deleteConcert(id?: string) {
        this.isSelectedConcert = false;
        this.concerts = this.concerts.filter((concert) => concert.concertId !== id);
        console.log(this.concerts);
        console.log(this.isSelectedConcert);
    }
}