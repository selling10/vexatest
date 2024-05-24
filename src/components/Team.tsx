import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  socialNetworks: SocialNetworksProps[];
}

interface SocialNetworksProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Emma Smith",
    position: "Product Manager",
    email: "emma.smith@example.com",
    phone: "+1234567890",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "John Doe",
    position: "Tech Lead",
    email: "john.doe@example.com",
    phone: "+0987654321",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container py-16 sm:py-24 bg-[#EFE3E3]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Kontakta oss
      </h2>
      <p className="mt-4 mb-10 text-xl text-black">
        Meet the professionals who drive our company forward.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {teamList.map(({ imageUrl, name, position, email, phone, socialNetworks }: TeamProps) => (
          <Card key={name} className="bg-white bg-opacity-90 rounded-lg shadow-md overflow-hidden">
            <CardHeader className="flex flex-col items-center pt-8 pb-4">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="rounded-full w-24 h-24 object-cover mb-4"
              />
              <CardTitle className="text-xl font-semibold text-black">{name}</CardTitle>
              <CardDescription className="text-black">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center px-4 pb-4 text-black">
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
            </CardContent>

            <CardFooter className="flex justify-center space-x-4 pb-4">
              {socialNetworks.map(({ name, url }: SocialNetworksProps) => (
                <a
                  key={name}
                  rel="noreferrer noopener"
                  href={url}
                  target="_blank"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">{name} icon</span>
                  {socialIcon(name)}
                </a>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
