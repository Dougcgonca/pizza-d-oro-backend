import { Injectable } from '@nestjs/common';
import { Pizza, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaService) {}

  async pizzas(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PizzaWhereUniqueInput;
    where?: Prisma.PizzaWhereInput;
    orderBy?: Prisma.PizzaOrderByWithRelationInput;
  }): Promise<Pizza[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pizza.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPizza(data: Prisma.PizzaCreateInput): Promise<Pizza> {
    return this.prisma.pizza.create({ data });
  }

  async deletePizza(where: Prisma.PizzaWhereUniqueInput): Promise<Pizza> {
    return this.prisma.pizza.delete({ where });
  }
}
