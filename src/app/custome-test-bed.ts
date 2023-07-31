/* eslint-disable import/no-unresolved */
import {
    ComponentFixture,
    TestBed,
    TestModuleMetadata,
} from '@angular/core/testing';
import { WebStorageService } from './service/web-storage.service';
import { Type } from '@angular/core';

export class CustomeTestBed implements Partial<TestBed> {
    public static configureTestingModule(
        { baseConfig }: { baseConfig: Partial<TestModuleMetadata>; }    ): TestBed {
        const customConfig: Partial<TestModuleMetadata> = {
            imports: [],
            declarations: [],
            providers: [
                {
                    provide: WebStorageService,
                    useValue: jasmine.createSpyObj('WebStorageService', [
                        'getRemote',
                        'setRemote',
                    ]),
                },
            ],
        };

        return TestBed.configureTestingModule({
            imports: Object.assign([], baseConfig.imports, customConfig.imports),
            declarations: Object.assign(
                [],
                baseConfig.declarations,
                customConfig.declarations
            ),
            providers: Object.assign(
                [],
                baseConfig.declarations,
                customConfig.declarations
            ),
        });
    }

    public static compileComponents(): Promise<any> {
        return TestBed.compileComponents();
    }

    public static createComponent<T>(component: Type<T>): ComponentFixture<T> {
        return TestBed.createComponent(component);
    }
}
