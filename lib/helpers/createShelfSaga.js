"use strict";

var assign_1 = require('../utils/assign');
var normalizr_1 = require('normalizr');
var redux_saga_1 = require('redux-saga');
var effects_1 = require('redux-saga/effects');
/* import { IAsyncActions, IAction, ICallApiHandler } from '../interfaces'; */
var createShelfSaga = function createShelfSaga(_ref, callApiHandler, schema) {
    var request = _ref.request;
    var success = _ref.success;
    var failure = _ref.failure;

    return {
        task: regeneratorRuntime.mark(function task(_ref2) {
            var payload = _ref2.payload;
            var wrappedResponseBody, responsePayload;
            return regeneratorRuntime.wrap(function task$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return effects_1.call(callApiHandler, payload);

                        case 3:
                            wrappedResponseBody = _context.sent;
                            responsePayload = !schema ? wrappedResponseBody : assign_1.default(normalizr_1.normalize(wrappedResponseBody, schema), {
                                receivedAt: wrappedResponseBody.receivedAt
                            });
                            _context.next = 7;
                            return effects_1.put(success(assign_1.default(responsePayload, {
                                requestPayload: payload
                            })));

                        case 7:
                            _context.next = 13;
                            break;

                        case 9:
                            _context.prev = 9;
                            _context.t0 = _context['catch'](0);
                            _context.next = 13;
                            return effects_1.put(failure({
                                message: _context.t0.message
                            }));

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, task, this, [[0, 9]]);
        }),
        watcher: regeneratorRuntime.mark(function watcher() {
            return regeneratorRuntime.wrap(function watcher$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.delegateYield(redux_saga_1.takeEvery(request().type, this.task), 't0', 1);

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, watcher, this);
        })
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createShelfSaga;