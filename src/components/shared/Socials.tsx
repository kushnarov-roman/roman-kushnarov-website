import * as Icons from "../ui/icons";

const Socials = () => {
  return (
    <ul className="flex gap-8 mt-8 lg:mt-20 [&>li>a>svg]:transition hover:[&>li>a>svg]:fill-teal-400">
      <li>
        <a href="mailto:kushnarov.work@gmail.com">
          <Icons.EmailIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/roman-kushnarov/" target="_blank">
          <Icons.LinkedinIcon />
        </a>
      </li>
      <li>
        <a href="https://github.com/kushnarov-roman" target="_blank">
          <Icons.GithubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/k4zzz3/" target="_blank">
          <Icons.InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
