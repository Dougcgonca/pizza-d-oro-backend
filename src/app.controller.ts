import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PizzaService } from './pizza/pizza.service';
import { Pizza as PizzaModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pizzaService: PizzaService,
  ) {}

  @Get('pizzas')
  async getAllPizza(): Promise<PizzaModel[]> {
    return this.pizzaService.pizzas({});
  }

  @Post('post/pizza')
  async createPizza(
    @Body() pizzaData: { name: string; ingredients: string; value: number },
  ): Promise<PizzaModel> {
    return this.pizzaService.createPizza(pizzaData);
  }
}
