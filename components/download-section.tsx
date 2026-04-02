import { Button } from "@/components/ui/button";
import { Chrome, Globe } from "lucide-react";

const browsers = [
  {
    name: "Chrome",
    icon: Chrome,
    url: "https://chromewebstore.google.com/detail/sift-imdb-ratings-on-vari/pfnhkljamlclkackkndllofcfhihacna",
    rating: "5.0",
  },
  {
    name: "Edge",
    icon: Globe,
    url: "https://microsoftedge.microsoft.com/addons/detail/sift-imdb-ratings-on-var/odgepppomekmdiifmjmocpjhopdmgjnl",
    rating: null,
  },
  {
    name: "Firefox",
    icon: Globe,
    url: "https://addons.mozilla.org/en-US/firefox/addon/imdb-ratings-for-various-ott/",
    rating: null,
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
                  {browser.rating && (
                    <div className="mt-1 flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <svg
                        className="h-4 w-4 fill-amber-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {browser.rating} rating
                    </div>
                  )}
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
