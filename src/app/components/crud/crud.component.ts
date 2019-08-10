import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {

    sponsImgs:     Array<string> = [];
    coWorkersImgs: Array<string> = [];
    cph:           Array<Object> = [];

    sideToResetRight:  string;
    sideToResetLeft:   string;
    prevDir:           string;


    constructor() { 
        let pathSpons     = 'assets/sponsors/';
        let pathCoWorkers = 'assets/coworkers/';

        this.sponsImgs     = [`${pathSpons}/abf.png`, `${pathSpons}/sammes.png`, `${pathSpons}/skebo.png`];
        this.coWorkersImgs = [`${pathCoWorkers}/campus.png`, `${pathCoWorkers}/ltu.png`, `${pathCoWorkers}/tkl.png`];
        this.cph = [
            {name: 'Google\'s', 
            xXx: [{
                    type: 'Discord', link: ''
                }
            ]},
            {name: 'Salt\'s',   
            xXx: [{
                    type: 'Snapchat',  
                    link: '' 
                },
                {
                    type: 'Youtube',  
                    link: ''
                }
            ]},
            {name: 'Brawni\'s', 
            xXx: [{
                    type: 'Podcast',    link: 'https://tinyurl.com/yy42y79y'
                }
            ]},
            {name: 'Roboto\'s', 
            xXx: [{
                    type: 'Musiklista', link: ''
                }
            ]}
        ];

        // console.log(this);
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
