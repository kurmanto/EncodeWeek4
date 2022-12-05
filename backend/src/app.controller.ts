  import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ethers } from 'ethers';
import { AppService } from './app.service';

export class claimTokenDto {
  address: string;
  amount: string
}

export class connectBallotDto {
  address: string;
}

export class voteDto {
  address: string;
  amount: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('token-address')
  getTokenAddress() {
    return this.appService.getTokenAddress();
  }

  @Get('get-votes') 
  getVotes() {
    return this.appService.getVotes();
  }

  @Post('claim-tokens')
  claimTokens(@Body() body: claimTokenDto) {
    return this.appService.claimTokens(body.address, body.amount);
  }

  @Post('connect-ballot-contract')
  connectBallotContract(@Body() body: connectBallotDto) {
    return this.appService.connectBallotContract(body.address);
  }

  @Post('post-vote')
  postVote(@Body() body: voteDto) {
    return this.appService.postVote(body.address, body.amount);
  }
}
