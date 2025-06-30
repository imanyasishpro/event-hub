import { Injectable } from "@angular/core";
import { ConcertModel } from "./concerts-concert/concert.model";
import { NewConcertModel } from "./add-concert/new-concert.model";

@Injectable({
    providedIn: 'root'
})

export class ConcertsService {
    private concerts: ConcertModel[] = [
        {
            concertId: '1',
            title: 'Test 1',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: '2',
            title: 'Avatar',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: '3',
            title: 'Avengers',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: '4',
            title: 'Black Panther',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: '5',
            title: 'Spider Man',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: '6',
            title: 'Dora',
            batch: 'New Event',
            date: '2025-10-12',
            location: 'Anthonys College',
            description: 'Your favorite rock bands from the 80s and 90s together on one stage for an unforgettable night',
            ticketPrice: '1000 LKR',
            ticletsLeft: 100
        },
        {
            concertId: '7',
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

    addConcert(concert: NewConcertModel) {
        this.concerts.push({
            concertId: "a1",
            title: concert.concertTitle,
            batch: "new event",
            date: concert.date,
            location: concert.location,
            description: concert.description,
            ticketPrice: concert.ticketPrice,
            ticletsLeft: concert.avalableTickets
        })
    }

    deleteConcert(id?: string) {
        this.isSelectedConcert = false;
        this.concerts = this.concerts.filter((concert) => concert.concertId !== id);
        console.log(this.concerts);
        console.log(this.isSelectedConcert);
    }
}