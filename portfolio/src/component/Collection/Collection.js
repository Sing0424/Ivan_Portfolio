import './Collection.css';
import Room from '../../images/Room.jpg';
import Taskmanager from '../../images/Taskmanager.png';
import Skyland from '../../images/Skyland.png';
import AutoWateringSys from '../../images/AutoWateringSystem.png'

export default function Collection() {
    return (
        <div className="collection">
        <title>Collection | Ivan's portfolio</title>
            <div className='projectBox'>
                <a href='https://github.com/Sing0424/VR_Project_Mindmap_RoomEscape' target="_blank" rel="noopener noreferrer"><img className='projectImg' src={Room} alt='VR Game Project' /></a>
                <div className='imgText'>
                    VR Room Escape Game
                </div>    
            </div>
            <div className='projectBox'>
                <a href='https://github.com/Sing0424/react-tasks-manager' target="_blank" rel="noopener noreferrer"><img className='projectImg' src={Taskmanager} alt='Taskmanager WebApp' /></a>
                <div className='imgText'>
                    Taskmanager WebApp
                </div>    
            </div>
            <div className='projectBox'>
                <a href='https://www.youtube.com/watch?v=d5sNesbd3DI' target="_blank" rel="noopener noreferrer"><img className='projectImg' src={Skyland} alt='Taskmanager WebApp' /></a>
                <div className='imgText'>
                    Skyland AR Hologram
                </div>    
            </div>
            <div className='projectBox'>
                <a href='https://www.youtube.com/watch?v=ztWTyQJLC6g' target="_blank" rel="noopener noreferrer"><img className='projectImg' src={AutoWateringSys} alt='Auto-watering System' /></a>
                <div className='imgText'>
                    Auto-watering System
                </div>    
            </div>
            
        </div>
    )
}