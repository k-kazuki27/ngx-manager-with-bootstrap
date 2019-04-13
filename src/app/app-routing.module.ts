import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './shared'

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
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
