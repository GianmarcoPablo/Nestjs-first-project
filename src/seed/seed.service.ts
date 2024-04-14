import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { HttpAdapter } from 'src/common/adapter/http-adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: HttpAdapter
  ) { }

  async executeSeed() {

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemonToInsert = []

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no: number = +segments[segments.length - 2]
      pokemonToInsert.push({ no, name })
    })
    await this.pokemonModel.insertMany(pokemonToInsert)
    return "Seed executed successfully!"
  }
}