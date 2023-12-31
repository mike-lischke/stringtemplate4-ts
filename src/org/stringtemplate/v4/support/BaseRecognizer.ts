/*
 * Copyright (c) Mike Lischke. All rights reserved.
 * Licensed under the BSD-3 License. See License.txt in the project root for license information.
 */

import { BitSet, IntStream, RecognitionException } from "antlr4ng";

import { RecognizerSharedState } from "./RecognizerSharedState.js";
import { CommonTree } from "./CommonTree.js";

export class BaseRecognizer {
    protected state: RecognizerSharedState = {
        _fsp: -1,
    };

    public match(_input: IntStream, _type: number): CommonTree | null {
        throw new Error("Not implemented");
    }

    public reportError(e: RecognitionException): void {
        throw new Error("Not implemented");
    }

    public recover(input: IntStream, re: RecognitionException): void {
        throw new Error("Not implemented");
    }

    protected pushFollow(_set: BitSet): void {
        throw new Error("Not implemented");
    }
}
