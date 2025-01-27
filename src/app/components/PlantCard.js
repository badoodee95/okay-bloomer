'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/navigation';


export default function PlantCard(plant) {
    const router = useRouter();



    function handleSelect() {
        console.log('plant.plant', plant.plant);
        localStorage.setItem('plant-id', plant.plant.plantId);
        router.push('/individual-plant');
    }

    return (
        <div class="column is-3">
            <a onClick={() => handleSelect()}>
                <div class="card is-shady">
                    {plant.plant.image &&
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src={plant.plant.image} alt={`${plant.plant.commonName} Image`} />
                            </figure>
                        </div>
                    }
                    <div class="card-content">
                        <div class="content">
                            <h4 className='is-size-4 has-text-weight-bold'>{plant.plant.nickname}</h4>
                            <h4 className='is-size-4 has-text-weight-bold'>{plant.plant.commonName}</h4>
                            <p className='is-size-6 is-italic'>{plant.plant.scientificName}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};



