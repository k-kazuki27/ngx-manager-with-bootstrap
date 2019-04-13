import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
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
