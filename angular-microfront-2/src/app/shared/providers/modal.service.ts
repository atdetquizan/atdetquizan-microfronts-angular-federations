import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Options } from '../interfaces';
import { ModalComponent } from '../components';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // Create a reference to our modal component
  newModalComponent!: ComponentRef<ModalComponent>;
  // Optional content passed at the creation : animation, size, ...
  options!: Options | undefined;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  // To get clean function call signatures, I will use typescript function overloading
  // Signature of the first approach
  open(
    vcrOrComponent: ViewContainerRef,
    content: TemplateRef<Element>,
    options?: Options
  ): void;

  // Signature of the second approach
  open<C>(vcrOrComponent: Type<C>, options?: Options): void;

  // Function implementation
  open<C>(
    vcrOrComponent: ViewContainerRef | Type<C>,
    param2?: TemplateRef<Element> | Options,
    options?: Options
  ) {
    const animations = {
      modal: {
        enter: 'enter-slide-down 0.8s',
      },
      overlay: {
        enter: 'fade-in 0.8s',
        leave: 'fade-out 0.3s forwards',
      },
    };
    if (vcrOrComponent instanceof ViewContainerRef) {
      // For the first approach, we know that the second param will be of type TemplateRef, so we have to cast it
      this.openWithTemplate(vcrOrComponent, param2 as TemplateRef<Element>, options?.data);
      this.options = Object.assign(
        {
          animations,
        },
        options
      );
    } else {
      this.openWithComponent(vcrOrComponent);
      // Same story here : for the second approach, the second param will be of type Options or undefined, since optional
      this.options = Object.assign(
        {
          animations,
        },
        param2 as Options | undefined
      );
    }
  }

  close() {
    this.newModalComponent.instance.close();
  }

  private openWithTemplate(
    vcr: ViewContainerRef,
    content: TemplateRef<Element>,
    data?: any
  ) {
    // We first start to clear previous views
    vcr.clear();
    // We create a view with the template content
    const innerContent = vcr.createEmbeddedView(content, data);

    // We create the modal component, and project the template content in the ng-content of the modal component
    this.newModalComponent = vcr.createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [innerContent.rootNodes],
    });
  }

  private openWithComponent(component: Type<unknown>) {
    // create the desired component, the content of the modal box
    const newComponent = createComponent(component, {
      environmentInjector: this.injector,
    });
    // create the modal component and project the instance of the desired component in the ng-content
    this.newModalComponent = createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[newComponent.location.nativeElement]],
    });

    document.body.appendChild(this.newModalComponent.location.nativeElement);

    // Attach views to the changeDetection cycle
    this.appRef.attachView(newComponent.hostView);
    this.appRef.attachView(this.newModalComponent.hostView);
  }
}
