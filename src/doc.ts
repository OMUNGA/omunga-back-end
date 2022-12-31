import { DocumentBuilder } from '@nestjs/swagger';


const config = new DocumentBuilder()
    .setTitle('Omunga')
    .setDescription('The Omunga API description')
    .setVersion('0.1')
    .build();



export { config }