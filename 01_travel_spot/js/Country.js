import { Spot } from './Spot.js';
import { descriptionDictionary, imageDictionary, countryImage } from './constants.js';

export class Country {
    constructor(country, description, color, spots) {
        this.country = country;
        this.description = description;
        this.color = color;
        this.spots = spots;
    }

    getSpots() {
        return this.spots.map(spot =>
            new Spot(spot, descriptionDictionary[spot], imageDictionary[spot])
        );
    }

    getCardHtml() {
        return `
            <a href="#${this.country}" class="col-12 col-md-6 col-lg-4 text-decoration-none text-reset">
                <div class="card h-100 text-center text-white" style="background: ${this.color};">
                    <img class="card-img-top img-aspect" src="${countryImage[this.country]}" alt="${this.country}">
                    <div class="card-body">
                        <h3 class="card-title">${this.country}</h3>
                        <p class="card-text">${this.description}</p>
                    </div>
                </div>
            </a>                        
        `;
    }

    getSpotsHtml() {
        return `
            <div id="${this.country}" style="background: ${this.color};">
                <div class="container py-3">
                    <div class="text-white">
                        <h2>${this.country}</h2>
                        <p>${this.description}</p>
                    </div>
                    <div class="row justify-content-between flex-wrap">
                        ${this.getSpots().map(spot => `
                            <div class="col-12 col-md-5 d-flex bg-white px-0 g-4">
                                <div class="col-8 p-3">
                                    <h4>${spot.name}</h4>
                                    <p>${spot.description}</p>  
                                </div>
                                <div class="col-4 d-flex justify-content-center align-items-center">
                                    <img src="${spot.image}" alt="${spot.name}" class="col-12 p-1 img-fluid img-aspect">
                                </div>
                            </div>            
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}