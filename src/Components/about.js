import JohnDoe from '../images/John-Doe.jpg'
function About() {
return (
    <section id="about-me">
    <h1>
    Hello, my name is
    <span class="rotate text-important">John doe</span>,<br />
    and i make horrible websites.
    </h1>
    <img class="avatar" src={JohnDoe} alt="jhon-doe" />
</section>
)
}
export default About