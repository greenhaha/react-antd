import React, { PureComponent } from 'react'

import { Map } from 'react-amap';

export default class GaoMap extends PureComponent{
    render(){
        return(
            <div style={{height:'350px'}}>
                <Map amapkey={'f6f479a4d288d64b9da7ae3a7e82df63'}  />
            </div>
        )
    }
}