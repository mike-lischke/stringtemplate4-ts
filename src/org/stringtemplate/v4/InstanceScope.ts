/*
 * [The "BSD license"]
 *  Copyright (c) 2011 Terence Parr
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *  1. Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *  3. The name of the author may not be used to endorse or promote products
 *     derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 *  IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 *  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 *  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */




import { java, JavaObject, type int } from "jree";
import { ST } from "./ST.js";
import { EvalTemplateEvent } from "./debug/EvalTemplateEvent.js";
import { InterpEvent } from "./debug/InterpEvent.js";

type List<E> = java.util.List<E>;
type ArrayList<E> = java.util.ArrayList<E>;
const ArrayList = java.util.ArrayList;



/** */
export  class InstanceScope extends JavaObject {
    /** Template that invoked us. */
    public readonly  parent:  InstanceScope;
    /** Template we're executing. */
    public readonly  st:  ST;
    /** Current instruction pointer. */
    public  ip:  int;

    /**
     * Includes the {@link EvalTemplateEvent} for this template. This is a
     * subset of {@link Interpreter#events} field. The final
     * {@link EvalTemplateEvent} is stored in 3 places:
     *
     * <ol>
     *  <li>In {@link #parent}'s {@link #childEvalTemplateEvents} list</li>
     *  <li>In this list</li>
     *  <li>In the {@link Interpreter#events} list</li>
     * </ol>
     *
     * The root ST has the final {@link EvalTemplateEvent} in its list.
     * <p>
     * All events get added to the {@link #parent}'s event list.</p>
     */
    public  events = new  ArrayList<InterpEvent>();

    /** All templates evaluated and embedded in this {@link ST}. Used
     *  for tree view in {@link STViz}.
     */
    public  childEvalTemplateEvents =
        new  ArrayList<EvalTemplateEvent>();

    public  earlyEval:  boolean;

    public  constructor(parent: InstanceScope, st: ST) {
        super();
this.parent = parent;
        this.st = st;
        this.earlyEval = parent !== null && parent.earlyEval;
    }
}
