import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import useSound from "use-sound"
import success from "audio/success.mp3"

export default class TaskCompletion extends Plugin {
	async onload() {
		this.addSettingTab(new TaskCompletionSettingTab(this.app, this));
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			let target = evt.target
		});
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}
	onunload() {
		console.log("bye")
	}
}


class TaskCompletionSettingTab extends PluginSettingTab {
	plugin: TaskCompletion;
	constructor(app: App, plugin: TaskCompletion) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display(): void {
		let {containerEl} = this;
		containerEl.empty();
		new Setting(containerEl)
			.setName('Task Completition Sound')
			.setDesc('You change the sound by replacing the "success.mp3" file with something else.')
	}
}