import { Controller, Get, Inject, Injectable, Query, UsePipes } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { createOperationDto } from 'src/operation/infraestructure/dtos/create-operation/create-operation.dto';
import { OperationService } from 'src/operation/infraestructure/services/operation.service';

@Controller()
export class CreateOperationApp {
  constructor(
    private readonly operationService: OperationService
  ) { }

  async execute(createOperationDto: createOperationDto): Promise<void> {
    await this.operationService.createOperation(createOperationDto);
  }

}