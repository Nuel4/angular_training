export class CounterService
{
    activeToInactiveCounter =0;
    inactiveToactiveCounter =0;

    increamentActiveToInactive()
    {
        this.activeToInactiveCounter++;
        console.log(this.activeToInactiveCounter);
    }
    increamentInactiveToActive()
    {
        this.inactiveToactiveCounter++;
        console.log(this.inactiveToactiveCounter);
    }
}

