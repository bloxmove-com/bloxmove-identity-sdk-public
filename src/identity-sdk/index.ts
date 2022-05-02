import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name IdentitySDK
 */
@Plugin({
	pluginName: 'IdentitySDK',
	plugin: 'mbp-identity-cordova-plugin',
	pluginRef: 'IdentitySDK',
	repo: '',
	platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class IdentitySDK extends IonicNativePlugin {
	@Cordova()
	initWithSettings(
		debugType: number,
		networkPrefix: string,
		didMethod: string,
		domain: string,
		claimType: string
	): Promise<any> {
		return;
	}

	@Cordova()
	createKeyPair(): Promise<any> {
		return;
	}

	@Cordova()
	destructKeyPair(): Promise<any> {
		return;
	}

	@Cordova()
	getMnemonicPhrase(): Promise<any> {
		return;
	}

	@Cordova()
	getPublicKey(): Promise<any> {
		return;
	}

	@Cordova()
	signData(data: any): Promise<any> {
		return;
	}

	@Cordova()
	signClaim(
		credentials: string[],
		did: string,
		issuer: string,
		type: string,
		expirationDate?: Date
	): Promise<any> {
		return;
	}

	@Cordova()
	getSecureObjectWithName(name: string): Promise<any> {
		return;
	}

	@Cordova()
	saveSecureObject(name: string, claim: any): Promise<any> {
		return;
	}

	@Cordova()
	deleteSecureObjectWithName(name: string): Promise<any> {
		return;
	}
}
