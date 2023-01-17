import { Controller, Post, Get, Param, Body, Req, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHi(): string {
        return this.appService.hi();
    }

    @Post()
    getHello(@Body() body): string {
        return this.appService.createEmailCode(body.email);
    }

    @Post(':code')
    checkCode(@Param('code') code: string) {
        return this.appService.checkCode(code);
    }

    @Post('v1/session')
    sendSessionId(@Body() body) {
        return this.appService.createSession(body);
    }

    @Post('v1/keys')
    saveBybtKeys(@Body() body) {
        return this.appService.saveBybtKeys(body);
    }

    @Post('v1/sessions/:session/password')
    changePassword(@Param('session') sessionId: string, @Body() body) {
        return this.appService.forgotPassword(body, sessionId);
    }
    
    @Post('bots/create-flow')
    createFlow() {
        return 'Flow created'
    }

    @Post('bots/create-bot')
    createBot(@Req() req) {
        return this.appService.createBot(req.body);
    }

    @Get('/v1/sessions/:sessionId/user-panel')
    userStat(@Param('sessionId') sessionId) {
        return {
            "user_statitics": {
                "total_realized_pnl": [
                    100,
                    150,
                    130
                ],
                "daily_realized_pnl": 100,
                "running_equity": [
                    10000,
                    15000,
                    13000
                ],
                "total_realized_pnl_data": [
                    {
                        "date": "2022-11-28",
                        "cum_pnl": 0
                    }
                ],
                "daily_realized_pnl_data": [
                    {
                        "date": "2022-11-28",
                        "cum_pnl": 100
                    }
                ],
                "profit_distribution_data": {},
                "equity_allocation_data": [
                    {
                        "coin": "USDT",
                        "allocation": 0.3
                    }
                ],
                "bots_win_rate_data": {
                    "profitable": 30,
                    "losable": 20,
                    "neutral": 50
                }
            },
            "status": {
                "code": "0.12.3",
                "message": "OK"
            }
        }
    }

    @Get('bots/:userId')
    allUserBots() {
        return {
            "flows": [
                {
                    "flow_id": 1,
                    "flow_status": "FLOW_STATUS_RUNNING_PRO",
                    "flow_context": {
                        "exchange": "EXCHANGE_BYBIT",
                        "market": "MARKET_SPOT",
                        "instrument": "USDBTC",
                        "strategy_type": "STRATEGY_TYPE_LONG",
                        "strategy_label": "STRATEGY_GRID_TRONIK"
                    },
                    "strategy_configuration": {
                        "label": "My experiment on Nov, 20 with SPOT market",
                        "datetime": "2022-11-28T16:46:50.52Z",
                        "parameters": {
                            "in_order_quantity_use_percent": false,
                            "in_order_quanity": 0.001,
                            "in_order_distance": 100,
                            "in_order_distance_use_percent": false,
                            "in_order_trading_range_use_percent": false,
                            "in_order_trading_range": {
                                "start_range": 10000,
                                "end_range": 12000
                            },
                            "trigger_distance_use_percent": false,
                            "trigger_distance_type": "all_active",
                            "trigger_distance": 100,
                            "max_trigger_count": 10,
                            "max_tp_distance_use_percent": false,
                            "max_tp_distance": 200,
                            "use_multiplier_in_order_quantity": false,
                            "multiplier_in_order_quantity_use_percent": false,
                            "multiplier_in_order_quantity_coef": -1,
                            "multiplier_in_order_quantity_max_quantity": -1,
                            "use_multiplier_in_order_distance": false,
                            "multiplier_in_order_distance_use_percent": false,
                            "multiplier_in_order_distance_coef": -1,
                            "multiplier_in_order_distance_max_distance": -1,
                            "use_beast_mode": false,
                            "use_trailing_trigger": false,
                            "trailing_trigger_profit_percent": -1,
                            "trailing_trigger_start_distance_use_percent": false,
                            "trailing_trigger_start_distance": -1,
                            "use_entire_take_profit": false,
                            "entire_position_take_profit_min_trigger_count": -1,
                            "entire_position_take_profit_profit_percent": -1,
                            "entire_position_take_profit_price_percent": -1,
                            "entire_position_take_profit_type": "exceeed_level",
                            "use_range_stop": false,
                            "range_stop_action": "close_and_stop",
                            "range_stop_condition": "range_crossing",
                            "value": -1,
                            "use_equity_stop": false,
                            "equity_stop_min_equity_use_percent": false,
                            "equity_stop_min_equity": -1,
                            "use_hedging": true,
                            "use_reverse": false,
                            "start_put_orders_from_price": false,
                            "price_to_start_from": -1,
                            "use_leverage": false,
                            "leverage": -1,
                            "use_margin_type": false,
                            "margin_type": "isolated",
                            "use_trailing_buy": false,
                            "trailing_buy_distance": -1,
                            "use_counter_distance": true
                        }
                    }
                },
                {
                    "flow_id": 2,
                    "flow_status": "FLOW_STATUS_RUNNING_AUTO",
                    "flow_context": {
                        "exchange": "EXCHANGE_BYBIT",
                        "market": "MARKET_SPOT",
                        "instrument": "USDBTC",
                        "strategy_type": "STRATEGY_TYPE_LONG",
                        "strategy_label": "STRATEGY_GRID_TRONIK"
                    },
                    "strategy_configuration": {
                        "label": "My experiment on Nov, 20 with SPOT market",
                        "datetime": "2022-11-28T16:46:50.52Z",
                        "parameters": {
                            "in_order_quantity_use_percent": false,
                            "in_order_quanity": 0.001,
                            "in_order_distance": 100,
                            "in_order_distance_use_percent": false,
                            "in_order_trading_range_use_percent": false,
                            "in_order_trading_range": {
                                "start_range": 10000,
                                "end_range": 12000
                            },
                            "trigger_distance_use_percent": false,
                            "trigger_distance_type": "all_active",
                            "trigger_distance": 100,
                            "max_trigger_count": 10,
                            "max_tp_distance_use_percent": false,
                            "max_tp_distance": 200,
                            "use_multiplier_in_order_quantity": false,
                            "multiplier_in_order_quantity_use_percent": false,
                            "multiplier_in_order_quantity_coef": -1,
                            "multiplier_in_order_quantity_max_quantity": -1,
                            "use_multiplier_in_order_distance": false,
                            "multiplier_in_order_distance_use_percent": false,
                            "multiplier_in_order_distance_coef": -1,
                            "multiplier_in_order_distance_max_distance": -1,
                            "use_beast_mode": false,
                            "use_trailing_trigger": false,
                            "trailing_trigger_profit_percent": -1,
                            "trailing_trigger_start_distance_use_percent": false,
                            "trailing_trigger_start_distance": -1,
                            "use_entire_take_profit": false,
                            "entire_position_take_profit_min_trigger_count": -1,
                            "entire_position_take_profit_profit_percent": -1,
                            "entire_position_take_profit_price_percent": -1,
                            "entire_position_take_profit_type": "exceeed_level",
                            "use_range_stop": false,
                            "range_stop_action": "close_and_stop",
                            "range_stop_condition": "range_crossing",
                            "value": -1,
                            "use_equity_stop": false,
                            "equity_stop_min_equity_use_percent": false,
                            "equity_stop_min_equity": -1,
                            "use_hedging": true,
                            "use_reverse": false,
                            "start_put_orders_from_price": false,
                            "price_to_start_from": -1,
                            "use_leverage": false,
                            "leverage": -1,
                            "use_margin_type": false,
                            "margin_type": "isolated",
                            "use_trailing_buy": false,
                            "trailing_buy_distance": -1,
                            "use_counter_distance": true
                        }
                    }
                },
                {
                    "flow_id": 3,
                    "flow_status": "FLOW_STATUS_RUNNING_AUTO",
                    "flow_context": {
                        "exchange": "EXCHANGE_BYBIT",
                        "market": "MARKET_SPOT",
                        "instrument": "USDBTC",
                        "strategy_type": "STRATEGY_TYPE_LONG",
                        "strategy_label": "STRATEGY_GRID_TRONIK"
                    },
                    "strategy_configuration": {
                        "label": "My experiment on Nov, 20 with SPOT market",
                        "datetime": "2022-11-28T16:46:50.52Z",
                        "parameters": {
                            "in_order_quantity_use_percent": false,
                            "in_order_quanity": 0.001,
                            "in_order_distance": 100,
                            "in_order_distance_use_percent": false,
                            "in_order_trading_range_use_percent": false,
                            "in_order_trading_range": {
                                "start_range": 10000,
                                "end_range": 12000
                            },
                            "trigger_distance_use_percent": false,
                            "trigger_distance_type": "all_active",
                            "trigger_distance": 100,
                            "max_trigger_count": 10,
                            "max_tp_distance_use_percent": false,
                            "max_tp_distance": 200,
                            "use_multiplier_in_order_quantity": false,
                            "multiplier_in_order_quantity_use_percent": false,
                            "multiplier_in_order_quantity_coef": -1,
                            "multiplier_in_order_quantity_max_quantity": -1,
                            "use_multiplier_in_order_distance": false,
                            "multiplier_in_order_distance_use_percent": false,
                            "multiplier_in_order_distance_coef": -1,
                            "multiplier_in_order_distance_max_distance": -1,
                            "use_beast_mode": false,
                            "use_trailing_trigger": false,
                            "trailing_trigger_profit_percent": -1,
                            "trailing_trigger_start_distance_use_percent": false,
                            "trailing_trigger_start_distance": -1,
                            "use_entire_take_profit": false,
                            "entire_position_take_profit_min_trigger_count": -1,
                            "entire_position_take_profit_profit_percent": -1,
                            "entire_position_take_profit_price_percent": -1,
                            "entire_position_take_profit_type": "exceeed_level",
                            "use_range_stop": false,
                            "range_stop_action": "close_and_stop",
                            "range_stop_condition": "range_crossing",
                            "value": -1,
                            "use_equity_stop": false,
                            "equity_stop_min_equity_use_percent": false,
                            "equity_stop_min_equity": -1,
                            "use_hedging": true,
                            "use_reverse": false,
                            "start_put_orders_from_price": false,
                            "price_to_start_from": -1,
                            "use_leverage": false,
                            "leverage": -1,
                            "use_margin_type": false,
                            "margin_type": "isolated",
                            "use_trailing_buy": false,
                            "trailing_buy_distance": -1,
                            "use_counter_distance": true
                        }
                    }
                }
            ]
        }

    }
    
    @Get('/v1/sessions/:sessionId/bots/:botId/statistics')
    getOrders(){
        return {
            "bot_statistics": {
                "total_order_count": 1000,
                "orders": [
                    {
                        "order_type": "long/short",
                        "in_order_time": "2022-11-28T16:46:50.52Z",
                        "in_order_quantity": 100,
                        "in_order_price": 100,
                        "trailing_tp_time": "2022-11-28T16:46:50.52Z",
                        "trailing_tp_quantity": 100,
                        "elapsed_time": "5.20:16:56",
                        "stop_quantity": {
                            "label": "equity_stop",
                            "quantity": 100
                        },
                        "stop_price": {
                            "label": "equity_stop",
                            "price": 100
                        },
                        "profit": 1000
                    },
                    {
                        "order_type": "long/short",
                        "in_order_time": "2022-11-28T16:46:50.52Z",
                        "in_order_quantity": 100,
                        "in_order_price": 100,
                        "trailing_tp_time": "2022-11-28T16:46:50.52Z",
                        "trailing_tp_quantity": 100,
                        "elapsed_time": "5.20:16:56",
                        "stop_quantity": {
                            "label": "equity_stop",
                            "quantity": 100
                        },
                        "stop_price": {
                            "label": "equity_stop",
                            "price": 100
                        },
                        "profit": 1000
                    },
                    {
                        "order_type": "long/short",
                        "in_order_time": "2022-11-28T16:46:50.52Z",
                        "in_order_quantity": 100,
                        "in_order_price": 100,
                        "trailing_tp_time": "2022-11-28T16:46:50.52Z",
                        "trailing_tp_quantity": 100,
                        "elapsed_time": "5.20:16:56",
                        "stop_quantity": {
                            "label": "equity_stop",
                            "quantity": 100
                        },
                        "stop_price": {
                            "label": "equity_stop",
                            "price": 100
                        },
                        "profit": 1000
                    }
                ]
            }
        }
    }

    @Get('bots')
    allBots() {
        return {
            bots: [
                {
                    id: 1,
                    type: 'orderblock',
                    strategy: 'STRATEGY_TYPE_LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 11669.78,
                    pnl: ' - 11, 669.78% ',
                    pair: 'MATIC/USDT',
                    exchange: 'EXCHANGE_BYBT'
                },
                {
                    id: 2,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 3,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 4,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 5,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 6,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 7,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 8,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 9,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 10,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 11,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 12,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 13,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 14,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 15,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 16,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 17,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 18,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 19,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 20,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 21,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 22,
                    type: 'grid tronic',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 23,
                    type: 'orderblock',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 9669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 24,
                    type: 'orderblock',
                    strategy: 'LONG',
                    runtime: '3D 4H 23M',
                    risk: 'MEDIUM',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 25,
                    type: 'astrobot',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 26,
                    type: 'orderblock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 14669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 27,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'LOW',
                    apr: 13669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 28,
                    type: 'aftershock',
                    strategy: 'SHORT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 12669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 29,
                    type: 'astrobot',
                    strategy: 'SPOT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 10669.78,
                    pnl: '-11,669.78%',
                },
                {
                    id: 30,
                    number: '10',
                    type: 'astrobot',
                    strategy: 'SPOT',
                    runtime: '3D 4H 23M',
                    risk: 'HIGHT',
                    apr: 10669.78,
                    pnl: '-11,669.78%',
                },
            ]
        }
    }
}
