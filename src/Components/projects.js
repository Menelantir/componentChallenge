import Projectimg from '../images/proj1.jpg'
import Projectimg2 from '../images/proj2.jpg'
import Projectimg3 from '../images/proj3.jpg'
import Projectimg4 from '../images/proj4.jpg'



function Projects() {

const projects = [{name : "Project 1", srcimg:Projectimg} , {name : "Project 2", srcimg:Projectimg2} , {name : "Project 3", srcimg:Projectimg3}, {name :"Project 4", srcimg:Projectimg4} ];


return (


<section id="projects">
<h2 class="text-important">Projects</h2>
<div class="projects-container">
    
{projects.map(el=>

<div class="project-card">
    <img src={el.srcimg} alt="project" />
    <h3>{el.name}</h3>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
    aliquam.
    </p>
    <p><a href="#">Github Link</a></p>
</div>

)


};


</div>
</section>
)
}
export default Projects