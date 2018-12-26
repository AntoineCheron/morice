export default class StatePersistor<A> {

  keyPrefix: string = 'state-persistence-' 
  itemKey: string

  constructor(componentName: string) {
    this.itemKey = this.keyPrefix + componentName
  }

  public persist(a: A): void {
    window.localStorage.setItem(this.itemKey, JSON.stringify(a))
  }

  public unpersist(defaultValue: A): A {
    const storedValue = window.localStorage.getItem(this.itemKey)
    return storedValue !== null ? JSON.parse(storedValue) as A : defaultValue
  }

}
