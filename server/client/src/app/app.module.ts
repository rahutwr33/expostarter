import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { EditUser } from './components/dashboard/edituser/edit-user';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { ConfirmComponent } from './components/dashboard/confirm.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './components/chat/chat.service';


const firebase = AngularFireModule.initializeApp({   
                    apiKey: "AIzaSyBr3YHG69CvODG79_r1ktkVQWLYKVXuQeQ",
                    authDomain: "angular2-f5fc5.firebaseapp.com",
                    databaseURL: "https://angular2-f5fc5.firebaseio.com",
                    projectId: "angular2-f5fc5",
                    storageBucket: "angular2-f5fc5.appspot.com",
                    messagingSenderId: "358516740313"
                })

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    PublicProfileComponent,
    EditUser,
    ConfirmComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule,
    BootstrapModalModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    firebase
       
    
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, BlogService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
