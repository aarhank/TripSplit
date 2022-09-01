import {React,useState} from 'react'
import './index.css'
import bodyImage from "./cert.jpeg";
import ImageMarker, { Marker, MarkerComponentProps } from 'react-image-marker';
import { MarkEmailReadSharp } from '@mui/icons-material';
import ReactTooltip from 'react-tooltip';


export default function CertificateGen() {
    let [markers, setMarkers] = useState([]);
    var texts = ["Name","Serial-No"];
    
    const PosMarkers = (marker) => {
        
        setMarkers([...markers, marker])
        
    }
    const CustomMarker = (props) => {
       
        return (
            <div className="custom-marker" data-tip={JSON.stringify(markers[props.itemNumber])}>{texts[props.itemNumber]}
            <ReactTooltip/>
            </div>
            
        );
    };
    localStorage.setItem(`coordinates`,JSON.stringify(markers));
    console.log(markers)
    return (
      <div className="maindashboard-main">
        {/* <h1>Hello testing</h1>
        <button disabled={!markers.length > 0} onClick={() => setMarkers([])}>
          Reset
        </button>
        <button
          disabled={!markers.length > 0}
          onClick={() => setMarkers((prev) => prev.slice(0, -1))}
        >
          Remove Marker
        </button> */}
        <ImageMarker
          src={bodyImage}
          markers={markers}
          onAddMarker={PosMarkers}
          markerComponent={CustomMarker}
        />
      </div>
    );
}
