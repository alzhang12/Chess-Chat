import React from 'react';

class ChessBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            white: [
                {
                    piece: 'Rook',
                    row: 0,
                    col: 0,
                    x: 0,
                    y: 0,
                    status: 'alive',
                },
                {
                    piece: 'Rook',
                    row: 0,
                    col: 7,
                    x: 7 * 75,
                    y: 0,
                    status: 'alive',},
                {
                    piece: 'Knight',
                    row: 0,
                    col: 1,
                    x: 1 * 75,
                    y: 0,
                    status: 'alive',},
                {
                    piece: 'Knight',
                    row: 0,
                    col: 6,
                    x: 6 * 75,
                    y: 0,
                    status: 'alive',},
                {
                    piece: 'Bishop',
                    row: 0,
                    col: 2,
                    x: 2 * 75,
                    y: 0,
                    status: 'alive',},
                {
                    piece: 'Bishop',
                    row: 0,
                    col: 5,
                    x: 5 * 75,
                    y: 0,
                    status: 'alive',},
                {
                    piece: 'Queen',
                    row: 0,
                    col: 3,
                    x: 3 * 75,
                    y: 0,
                    status: 'alive',},
                {
                    piece: 'King',
                    row: 0,
                    col: 4,
                    x: 4 * 75,
                    y: 0,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 0,
                    x: 75,
                    y: 0,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 1,
                    x: 75,
                    y: 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 2,
                    x: 75,
                    y: 2 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 3,
                    x: 75,
                    y: 3 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 4,
                    x: 75,
                    y: 4 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 5,
                    x: 75,
                    y: 5 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 6,
                    x: 75,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 1,
                    col: 7,
                    x: 75,
                    y: 7 * 75,
                    status: 'alive',
                },
            ],
            black: [
                {
                    piece: 'Rook',
                    row: 7,
                    col: 0,
                    x: 0,
                    y: 7 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Rook',
                    row: 7,
                    col: 7,
                    x: 7 * 75,
                    y: 7 * 75,
                    status: 'alive', 
                },
                {
                    piece: 'Knight',
                    row: 7,
                    col: 1,
                    x: 1 * 75,
                    y: 7 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Knight',
                    row: 7,
                    col: 6,
                    x: 6 * 75,
                    y: 7 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Bishop',
                    row: 7,
                    col: 2,
                    x: 2 * 75,
                    y: 7 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Bishop',
                    row: 7,
                    col: 5,
                    x: 5 * 75,
                    y: 7 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Queen',
                    row: 7,
                    col: 3,
                    x: 3 * 75,
                    y: 7 * 75,
                    status: 'alive',
                },
                {
                    piece: 'King',
                    row: 7,
                    col: 4,
                    x: 4 * 75,
                    y: 7 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 0,
                    x: 0,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 1,
                    x: 1 * 75,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 2,
                    x: 2 * 75,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 3,
                    x: 3 * 75,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 4,
                    x: 4 * 75,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 5,
                    x: 5 * 75,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 6,
                    x: 6 * 75,
                    y: 6 * 75,
                    status: 'alive',
                },
                {
                    piece: 'Pawn',
                    row: 6,
                    col: 7,
                    x: 7 * 75,
                    y: 6 * 75,
                    status: 'alive',
                },
            ],
            isDragging: false,
        };

        this.imagePieces = {
            whitePawn: {
                x: 1000,
                y: 0,
            },
            whiteRook: {
                x: 800,
                y: 0,
            },
            whiteKnight: {
                x: 600,
                y: 0,
            },
            whiteBishop: {
                x: 400,
                y: 0,
            },
            whiteKing: {
                x: 0,
                y: 0,
            },
            whiteQueen: {
                x: 200,
                y: 0,
            },
            blackPawn: {
                x: 1000,
                y: 200,
            },
            blackRook: {
                x: 800,
                y: 200,
            },
            blackKnight: {
                x: 600,
                y: 200,
            },
            blackBishop: {
                x: 400,
                y: 200,
            },
            blackKing: {
                x: 0,
                y: 200,
            },
            blackQueen: {
                x: 200,
                y: 200,
            },
        };

        this.chessCanvas = React.createRef();

        // drawing functions
        this.drawBoard = this.drawBoard.bind(this);
        this.drawPieces = this.drawPieces.bind(this);

        // event handlers
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.tileHasPiece = this.tileHasPiece.bind(this);
    }

    componentDidUpdate() {
        if (this.state.isDragging) {
            this.drawBoard();
            this.drawPieces();
        }
    }

    drawBoard() {
        // get canvas 
        const myCanvas = this.chessCanvas.current;
        const ctx = myCanvas.getContext('2d');

        // place pieces on board
        // square size
        const size = ctx.canvas.height / 8;
        let upperLeftY = 0;
        let upperLeftX = 0;

        // draw chess board
        for (let row = 0; row < 8; ++row) {
            for (let col = 0; col < 8; ++col) {
                let color = "";
                if ((row % 2 == 0 && col % 2 == 1) || (row % 2 == 1 && col % 2 == 0)) {
                    color = "grey";
                }
                else {
                    color = "lightgrey";
                }

                ctx.fillStyle = color;
                ctx.fillRect(upperLeftX, upperLeftY, size, size);
                
                // update x coordinate
                upperLeftX += size;
            }
            // update x and y coordinates
            upperLeftX = 0;
            upperLeftY += size;
        }
    }

    drawPieces() {
        // get canvas 
        const myCanvas = this.chessCanvas.current;
        const ctx = myCanvas.getContext('2d');

        // get state of board
        const { white } = this.state;
        const { black } = this.state;

        // draw each piece 
        for (let i = 0; i < white.length; ++i) {
            let curPiece = this.state.white[i].piece;
            if (curPiece == 'Pawn') {
                ctx.drawImage(this.pieces, this.imagePieces.whitePawn.x, this.imagePieces.whitePawn.y, 200, 200, this.state.white[i].x, this.state.white[i].y, 75, 75);
            }
            if (curPiece == 'Rook') {
                ctx.drawImage(this.pieces, this.imagePieces.whiteRook.x, this.imagePieces.whiteRook.y, 200, 200, this.state.white[i].x, this.state.white[i].y, 75, 75);
            }
            if (curPiece == 'Knight') {
                ctx.drawImage(this.pieces, this.imagePieces.whiteKnight.x, this.imagePieces.whiteKnight.y, 200, 200, this.state.white[i].x, this.state.white[i].y, 75, 75);
            }
            if (curPiece == 'Bishop') {
                ctx.drawImage(this.pieces, this.imagePieces.whiteBishop.x, this.imagePieces.whiteBishop.y, 200, 200, this.state.white[i].x, this.state.white[i].y, 75, 75);
            }
            if (curPiece == 'King') {
                ctx.drawImage(this.pieces, this.imagePieces.whiteKing.x, this.imagePieces.whiteKing.y, 200, 200, this.state.white[i].x, this.state.white[i].y, 75, 75);
            }
            if (curPiece == 'Queen') {
                ctx.drawImage(this.pieces, this.imagePieces.whiteQueen.x, this.imagePieces.whiteQueen.y, 200, 200, this.state.white[i].x, this.state.white[i].y, 75, 75);
            }
        }
        for (let i = 0; i < black.length; ++i) {
            let curPiece = this.state.black[i].piece;
            if (curPiece == 'Pawn') {
                ctx.drawImage(this.pieces, this.imagePieces.blackPawn.x, this.imagePieces.blackPawn.y, 200, 200, this.state.black[i].x, this.state.black[i].y, 75, 75);
            }
            if (curPiece == 'Rook') {
                ctx.drawImage(this.pieces, this.imagePieces.blackRook.x, this.imagePieces.blackRook.y, 200, 200, this.state.black[i].x, this.state.black[i].y, 75, 75);
            }
            if (curPiece == 'Knight') {
                ctx.drawImage(this.pieces, this.imagePieces.blackKnight.x, this.imagePieces.blackKnight.y, 200, 200, this.state.black[i].x, this.state.black[i].y, 75, 75);
            }
            if (curPiece == 'Bishop') {
                ctx.drawImage(this.pieces, this.imagePieces.blackBishop.x, this.imagePieces.blackBishop.y, 200, 200, this.state.black[i].x, this.state.black[i].y, 75, 75);
            }
            if (curPiece == 'King') {
                ctx.drawImage(this.pieces, this.imagePieces.blackKing.x, this.imagePieces.blackKing.y, 200, 200, this.state.black[i].x, this.state.black[i].y, 75, 75);
            }
            if (curPiece == 'Queen') {
                ctx.drawImage(this.pieces, this.imagePieces.blackQueen.x, this.imagePieces.blackQueen.y, 200, 200, this.state.black[i].x, this.state.black[i].y, 75, 75);
            }
        }
    }

    handleMouseDown(event) {
        this.setState({
            isDragging: true,
        });
    }

    handleMouseUp(event) {
        if (this.state.isDragging) {
            // stop dragging
            this.setState({
                isDragging: false,
            });
        }
    }

    handleMouseMove(event) {
        if (this.state.isDragging) {
            const canv = this.chessCanvas.current.getBoundingClientRect();

            let tile = {
                row: event.clientY - canv.top,
                col: event.clientX - canv.left,
            };

            
            const { white } = this.state;
            const { black } = this.state;

            for (let i = 0; i < white.length; ++i) {
                if (white[i].row == tile.row && white[i].col == tile.col) {
                    let whitePieces = [...this.state.white];
                    whitePieces[i][x] = tile.col;
                    whitePieces[i][y] = tile.row;
                    this.setState({
                        white: whitePieces,
                    });
                }
            }
            for (let i = 0; i < black.length; ++i) {
                if (black[i].row == tile.row && black[i].col == tile.col) {
                    let blackPieces = [...this.state.black];
                    blackPieces[i][x] = tile.col;
                    blackPieces[i][y] = tile.row;
                    this.setState({
                        black: blackPieces,
                    });
                }
            }
        }
    }

    tileHasPiece(tile) {
        const { white } = this.state;
        const { black } = this.state;

        for (let i = 0; i < white.length; ++i) {
            if (white[i].row == tile.row && white[i].col == tile.col) {
                return white[i];
            }
        }
        for (let i = 0; i < black.length; ++i) {
            if (black[i].row == tile.row && black[i].col == tile.col) {
                return black[i];
            }
        }
        return false;
    }
    
    componentDidMount() {
        const myCanvas = this.chessCanvas.current;
        const ctx = myCanvas.getContext('2d');

        // square size
        const size = ctx.canvas.height / 8;
        let upperLeftY = 0;
        let upperLeftX = 0;

        // draw chess board
        for (let row = 0; row < 8; ++row) {
            for (let col = 0; col < 8; ++col) {
                let color = "";
                if ((row % 2 == 0 && col % 2 == 1) || (row % 2 == 1 && col % 2 == 0)) {
                    color = "grey";
                }
                else {
                    color = "lightgrey";
                }

                ctx.fillStyle = color;
                ctx.fillRect(upperLeftX, upperLeftY, size, size);
                
                // update x coordinate
                upperLeftX += size;
            }
            // update x and y coordinates
            upperLeftX = 0;
            upperLeftY += size;
        }

        upperLeftX = 0;
        upperLeftY = 0;
        
        // get pieces
        this.pieces = new Image();
        this.pieces.src = '/static/chess-pieces.png/';
        this.pieces.onload = () => {
            for (let row = 0; row < 8; ++row) {
                for (let col = 0; col < 8; ++col) {
                    if (row == 1) {
                        ctx.drawImage(this.pieces, 1000, 0, 200, 200, upperLeftX, upperLeftY, size, size);
                    }
                    if (row == 6) {
                        ctx.drawImage(this.pieces, 1000, 200, 200, 200, upperLeftX, upperLeftY, size, size);
                    }
                    if (row == 0) {
                        if (col == 0 || col == 7) {
                            ctx.drawImage(this.pieces, 800, 0, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 1 || col == 6) {
                            ctx.drawImage(this.pieces, 600, 0, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 2 || col == 5) {
                            ctx.drawImage(this.pieces, 400, 0, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 3) {
                            ctx.drawImage(this.pieces, 200, 0, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 4) {
                            ctx.drawImage(this.pieces, 0, 0, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                    }
                    if (row == 7) {
                        if (col == 0 || col == 7) {
                            ctx.drawImage(this.pieces, 800, 200, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 1 || col == 6) {
                            ctx.drawImage(this.pieces, 600, 200, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 2 || col == 5) {
                            ctx.drawImage(this.pieces, 400, 200, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 3) {
                            ctx.drawImage(this.pieces, 200, 200, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                        if (col == 4) {
                            ctx.drawImage(this.pieces, 0, 200, 200, 200, upperLeftX, upperLeftY, size, size);
                        }
                    }

                    // update x coordinate
                    upperLeftX += size;
                }

                // update x and y coordinates
                upperLeftX = 0;
                upperLeftY += size;
            }
        }
    }

    render() {
        const rows = [1, 2, 3, 4, 5, 6, 7, 8];
        const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        return (
            <canvas ref={this.chessCanvas} id="chessboard" width="600" height="600"></canvas>
        )
    }
}

export default ChessBoard;
