import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Globals } from '../../../globals';

@Component({
    selector: 'crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {
    cph:           Array<any> = [];

    sideToResetRight:  string;
    sideToResetLeft:   string;
    prevDir:           string;

    constructor(private globals: Globals) {         
        this.cph = [
            {name: '\'s', 
            xXx: [{
                    type: '', link: ''
                }
            ]},
            {name: '\'s',   
            xXx: [{
                    type: '',  
                    link: '' 
                },
                {
                    type: '',
                    link: ''
                }
            ]},
            {name: '\'s', 
            xXx: [{
                    type: '', link: ''
                }
            ]},
            {name: '\'s', 
            xXx: [{
                    type: '', link: ''
                }
            ]}
        ];
    }
    
    ngOnInit() {
    }

    newSide(activeSide: string, next: string, dir: string) {
        if(dir === 'right') {
            if(this.prevDir !== 'right') {
                if(next !== 'front')
                    $('.front').css({'transform-origin': 'left', 'transform': 'translateX(100%) rotateY(90deg)'});

                if(next !== 'right')
                    $('.right').css({'transform-origin': 'left', 'transform': 'translateX(100%) rotateY(90deg)'});

                if(next !== 'back')
                    $('.back').css({'transform-origin':  'left', 'transform': 'translateX(100%) rotateY(90deg)'});

                if(next !== 'left')
                    $('.left').css({'transform-origin':  'left', 'transform': 'translateX(100%) rotateY(90deg)'});
            }

            if(this.sideToResetRight) {
                $('.' + this.sideToResetRight).css({'transform-origin': 'left', 'transform': 'translateX(100%) rotateY(90deg)'});
            }
    
            $('.' + activeSide).css({'transform-origin': 'right', 'transform': 'translateX(-100%) rotateY(90deg)'});
            $('.' + next).css({'transform-origin': 'right', 'transform': 'translateX(0) rotateY(0)'});
    
            this.sideToResetRight = activeSide;
        }
        else if(dir === 'left') {
            if(this.prevDir !== 'left') {
                if(next !== 'front')
                    $('.front').css({'transform-origin': 'right', 'transform': 'translateX(-100%) rotateY(90deg)'});

                if(next !== 'right')
                    $('.right').css({'transform-origin': 'right', 'transform': 'translateX(-100%) rotateY(90deg)'});

                if(next !== 'back')
                    $('.back').css({'transform-origin':  'right', 'transform': 'translateX(-100%) rotateY(90deg)'});

                if(next !== 'left')
                    $('.left').css({'transform-origin':  'right', 'transform': 'translateX(-100%) rotateY(90deg)'});
            }

            if(this.sideToResetLeft) {
                $('.' + this.sideToResetLeft).css({'transform-origin': 'right', 'transform': 'translateX(-100%) rotateY(90deg)'});
            }
    
            $('.' + activeSide).css({'transform-origin': 'left', 'transform': 'translateX(100%) rotateY(90deg)'});
            $('.' + next).css({'transform-origin': 'left', 'transform': 'translateX(0) rotateY(0)'});
    
            this.sideToResetLeft = activeSide;    
        }

        this.prevDir = dir;
    }
}
