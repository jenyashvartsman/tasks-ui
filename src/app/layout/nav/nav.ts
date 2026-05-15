import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav {
  // buttons style
  private readonly btnStyleBase =
    'inline-flex items-center gap-1.5 font-semibold text-[13px] px-3.5 py-2 rounded-xl transition-colors';
  readonly btnStyleInactive = `${this.btnStyleBase} text-muted hover:bg-bg-deep hover:text-ink`;
  readonly btnStyleActive = `${this.btnStyleBase} bg-surface text-ink border border-border hover:bg-surface-muted hover:border-border-strong`;

  readonly navItems: { label: string; route: string; exact?: boolean }[] = [
    { label: 'Home', route: '/home' },
    { label: 'Tasks', route: '/tasks' },
  ];
}
