import React from "react";

document.addEventListener('scroll', timeline);

function timeline(){
	var threshold_position = window.scrollY + window.innerHeight * 2/3;
	//compare scrolltop with scrolltop on each timeline event
	var timeline_events = document.querySelectorAll('.timeline li');
	for(var i=0;i<timeline_events.length;i++){
		if(timeline_events[i].offsetTop < threshold_position){
			timeline_events[i].classList.add('visible');
		} else {
			timeline_events[i].classList.remove('visible');
		}
	}
}
timeline();

const EventTimeline = () => {
  return (
    <>
    <h1 className="Events_heading">Events</h1>
    <div className="Events_line"></div>
    <div class="containers">
      <ul class="timeline">
        <li>
          <h3 className="timeline_date">2001</h3>
          <p className="timeline_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <h3 className="timeline_date">2001</h3>
          <p className="timeline_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <h3 className="timeline_date">2001</h3>
          <p className="timeline_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <h3 className="timeline_date">2001</h3>
          <p className="timeline_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <h3 className="timeline_date">2001</h3>
          <p className="timeline_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <h3 className="timeline_date">2001</h3>
          <p className="timeline_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
      </ul>
    </div>
    </>
  );
};

export default EventTimeline;
