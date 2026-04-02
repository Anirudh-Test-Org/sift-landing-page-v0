import { Button } from "@/components/ui/button";
import { Chrome, Globe } from "lucide-react";

const browsers = [
  {
    name: "Chrome",
    icon: Chrome,
    url: "https://chromewebstore.google.com/detail/sift-imdb-ratings-on-vari/pfnhkljamlclkackkndllofcfhihacna",
  },
  {
    name: "Edge",
    icon: Globe,
    url: "https://microsoftedge.microsoft.com/addons/detail/sift-imdb-ratings-on-var/odgepppomekmdiifmjmocpjhopdmgjnl",
  },
  {
    name: "Firefox",
    icon: Globe,
    url: "https://addons.mozilla.org/en-US/firefox/addon/imdb-ratings-for-various-ott/",
  },
];

export function DownloadSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Download for your browser
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Available on all major browsers. Install in seconds.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {browsers.map((browser) => (
              <a
                key={browser.name}
                href={browser.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="text-foreground transition-colors group-hover:text-accent">
                  <browser.icon className="h-10 w-10" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">
                    {browser.name}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  Add to {browser.name}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
