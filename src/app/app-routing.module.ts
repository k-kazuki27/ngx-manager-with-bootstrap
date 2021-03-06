import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './shared'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/features.module').then(m => m.FeaturesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '' }
]

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled', // ブラウザバックしたときに遷移前のスクロール位置に復元する
  anchorScrolling: 'enabled' // アンカーリンク有効
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
