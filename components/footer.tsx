import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold text-sm">
              S
            </div>
            <span className="text-lg font-semibold text-foreground">Sift</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by{" "}
            <a
              href="mailto:anirudh.nimmagadda@gmail.com"
              className="font-medium text-foreground hover:text-accent transition-colors"
            >
              Anirudh
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ackinc/webext-movie-ratings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            IMDB ratings powered by the{" "}
            <a
              href="https://www.patreon.com/join/omdb"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-accent transition-colors"
            >
              OMDB API
            </a>
            . Consider supporting the project!
          </p>
        </div>
      </div>
    </footer>
  );
}
