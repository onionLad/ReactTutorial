/*
 * index.js
 * Bill Xia
 * 12/18/22
 *
 * Purpose: A script that performs all the major operations for our
 *          tick-tack-toe interface.
 */

/* ======================================================================== *\
 *  IMPORTS                                                                 *
\* ======================================================================== */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* ======================================================================== *\
 *  CLASS DEFINITIONS                                                       *
\* ======================================================================== */

// /* Defines the Square class, which is a component of the Board class. */
// class Square extends React.Component {

//     /*
//      * render
//      * Returns a description of what gets displayed.
//      */
//     render() {
//         return (
//             <button
//                 className="square"

//                 /* 
//                  * This line updates the Board state when the Square is 
//                  * clicked.
//                  * 
//                  * Note: The "() =>" syntax essentially indicates a macro.
//                  */
//                 onClick={ () => this.props.onClick() }
//             >

//                 {this.props.value}

//             </button>
//         );
//     }

// }

/*
 * Because the Square class only calls the render function and has no state
 * members, it can be replaced with a function component.
 */
function Square(props) {
    return (
        <button
            className="square"
            onClick={ props.onClick() }
        >
            {props.value}
        </button>
    );
}

/* Defines the Board class, which is a component of the Game class. */
class Board extends React.Component {

    /*
     * constructor
     * Initializes Board class members.
     */
    constructor(props) {
        super(props);
        this.state = {

            /* Array that keeps track of the state of each square. */
            squares: Array(9).fill(null),

            /* Keeps track of which player's turn it currently is. */
            xIsNext: true

        };
    }

    /*
     * handleClick
     * Updates the Board state.
     */
    handleClick(i) {
        
        /* 
         * Forgive the terrible variable names. I'm just following the
         * tutorial.
         * 
         * I'm pretty sure this function gets a local version of the squares
         * member, updates it, then transfers the local change to the actual
         * class member.
         */
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });

    }

    renderSquare(i) {
        return (
            <Square 

                /* Render the square using data from the squares member. */
                value={this.state.squares[i]}

                /* This function updates Board when Square gets clicked. */
                onClick={ () => this.handleClick(i) }

            />
        );
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

/* Defines the Game class. */
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

/* ======================================================================== *\
 *  PROGRAM START                                                           *
\* ======================================================================== */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);
